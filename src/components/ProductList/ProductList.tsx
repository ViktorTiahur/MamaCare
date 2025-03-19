import React from "react";
import products from "../../data/products.json";
import Card from "../Card/Card";
import styles from "./ProductList.module.scss";

interface ProductListProps {
  title?: string;
  customClass?: string; // Проп для кастомного класу
  children?: React.ReactNode;
  itemsToShow?: number;
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  customClass,
  children,
  itemsToShow = 3,
}) => {
  const limitedProducts = products.slice(0, itemsToShow);

  return (
    // <div className={`${styles.productList} ${customClass || ""}`}>
    //   <div className={styles.container}>
    <div className={`${styles.cardList}  ${customClass || ""}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {limitedProducts.map((product, index) => (
        <Card key={index} {...product} />
      ))}
      {/* </div> */}
       {children}
      {/* </div> */}
    </div>
  );
};

export default ProductList;
