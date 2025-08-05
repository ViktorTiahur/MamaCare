import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import products from "@/data/mockProducts";
import getStringInCurrentLanguage from "@/utils/getStringInCurrentLanguage";

import Card from "../Card/Card";

const SingleProduct: React.FC = () => {
  const [product] = useState(products[0]); // Беремо перший товар з файлу
  const { i18n } = useTranslation();

  return (
    <div>
      <h1>Огляд товару</h1>
      <Card
        id={String(product.id)}
        name={getStringInCurrentLanguage(
          product.name,
          i18n.language as "en" | "uk"
        )}
        price={product.price}
        image={product.image}
      />
    </div>
  );
};

export default SingleProduct;
