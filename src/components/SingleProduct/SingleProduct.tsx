import React, { useState } from "react";

import products from "@/data/mockProducts";

import Card from "../Card/Card";

const SingleProduct: React.FC = () => {
  const [product] = useState(products[0]); // Беремо перший товар з файлу

  return (
    <div>
      <h1>Огляд товару</h1>
      <Card
        id={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
      />
    </div>
  );
};

export default SingleProduct;
