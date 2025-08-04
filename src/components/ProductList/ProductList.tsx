import React from "react";

import Card from "@/components/Card/Card";
import mockProducts from "@/data/mockProducts";
import getStringInCurrectLaguage from "@/untils/getStringInCurrentLanguage";

import styles from "./ProductList.module.scss";

interface ProductListProps {
  name?: string;
  children?: React.ReactNode;
  itemsToShow?: number;
  customClass?: string;
  lang: "en" | "uk";
}



const ProductList: React.FC<ProductListProps> = ({
  name,
  customClass,
  children,
  itemsToShow = 3,lang,
}) => {
  const limitedProducts = mockProducts.slice(0, itemsToShow);

  return (
    <div className={`${styles.cardList}  ${customClass || ""}`}>
      {name && <h2 className={styles.title}>{name}</h2>}
      {limitedProducts.map((product) => {
        console.log("Mapped product:", product);
        return (
          <Card
            key={product.id}
            id={String(product.id)}
            name={getStringInCurrectLaguage(product.name, lang)}
            price={product.price}
            image={product.image}
          />
        );
      })}

      {/* </div> */}
      {children}
      {/* </div> */}
    </div>
  );
};

export default ProductList;
