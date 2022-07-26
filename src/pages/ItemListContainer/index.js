import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  console.log("products:", products);
  const { categoryId } = useParams();
  console.log("categoryId:", categoryId);

  useEffect(() => {
    getProducts(categoryId)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      })
      .catch((err) => {
        console.log(err);
        alert("Ocurrio un error, revisar la consola!");
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      {/* Render ItemList Component */}
    </div>
  );
};
