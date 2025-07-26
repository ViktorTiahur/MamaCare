import React from "react";
import { Link } from "react-router-dom";

import styles from "./Breadcrumbs.module.scss";

interface BreadcrumbsProps {
  category?: string; // Pick&Buy або BabyBox
  subcategory?: string; 
  productName?: string; // Назва товару
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  category,
  subcategory,
  productName,
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
          <span>{productName}</span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
