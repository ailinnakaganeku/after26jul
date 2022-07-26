import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/firebase";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  console.log("Item:", item);
  const { id } = useParams();
  console.log("id:", id);

  useEffect(() => {
    getProductById(id).then((product) => setItem(product));
  }, [id]);

  return <div>{item && console.log("Render the ItemDetail Component")}</div>;
};
