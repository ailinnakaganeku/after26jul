import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_OPSIvWzsD6WeKc4szjKk1Wbagsf2fBY",
  authDomain: "coderhouse-31150.firebaseapp.com",
  projectId: "coderhouse-31150",
  storageBucket: "coderhouse-31150.appspot.com",
  messagingSenderId: "285434171526",
  appId: "1:285434171526:web:cf4b04af40b83d6c49c107",
  measurementId: "G-L1CJ2JPPR9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProducts = async (categoryId) => {
  if (typeof categoryId === "string") {
    return await getProductsByCategoryId(categoryId);
  } else {
    return await getAllProducts();
  }
};

export const getProductById = async (productId) => {
  if (typeof productId !== "string")
    throw new Error("productId must be a string");

  return (await getDoc(doc(db, "items", productId))).data();
};

export const getProductsByCategoryId = async (categoryId) => {
  if (typeof categoryId !== "string")
    throw new Error("categoryId must be a string");

  const itemCollection = collection(db, "items");
  const q = query(itemCollection, where("category", "==", categoryId));
  return await getDocs(q);
};

export const getAllProducts = async () => {
  const itemCollection = collection(db, "items");
  const q = query(itemCollection);
  return await getDocs(q);
};
