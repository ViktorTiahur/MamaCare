import React, { useState } from "react";
import Card from "../Card/Card";
import products from "../../data/products.json";

const SingleProduct: React.FC = () => {
  const [product] = useState(products[0]); // Беремо перший товар з файлу

  return (
    <div>
      <h1>Огляд товару</h1>
      <Card {...product} />
    </div>
  );
};

export default SingleProduct;
