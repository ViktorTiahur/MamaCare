import React from "react";
import { Link } from "react-router-dom";

import styles from "./Breadcrumbs.module.scss";

interface BreadcrumbsProps {
  category?: string; // Pick&Buy або BabyBox
  subcategory?: string; 
  productName?: string; // Назва товару
  current?: string,
  productId?: string,
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  category,
  subcategory,
  productName,
  productId,
  current
}) => {
  const categoryPath =
    category?.toLowerCase() === "babybox" ? "/product" : "/pickandbuy";

  return (
    <nav className={styles.breadcrumbs}>
      <Link to={categoryPath}>{category}</Link>

      {subcategory && (
        <>
          <span className={styles.separator}> / </span>
          <Link to={`${categoryPath}?subcategory=${subcategory}`}>
            {subcategory}
          </Link>
        </>
      )}

      {productName && (
        <>
          <span className={styles.separator}> / </span>
          <Link to={`/product/${productId}`}>{productName}</Link>
        </>
      )}
      {current && (
        <>
          <span className={styles.separator}> / </span>
          <span className={styles.current}>{current}</span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
