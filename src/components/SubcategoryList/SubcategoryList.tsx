import React from "react";
import styles from "./SubcategoryList.module.scss";
import Button from "../Button/Button";
import { Subcategory, SubcategoryProps } from "../../types/subcategory";

const SubcategoryList: React.FC<SubcategoryProps> = ({
  subcategories,
  activeId,
  onSelect,
}) => {
  return (
    <div className={styles.list}>
      {subcategories.map((subcategory) => (
        <Button
          key={subcategory.id}
          className={`${styles.card} ${
            activeId === subcategory.id ? styles.active : ""
          }`}
          onClick={() => onSelect?.(subcategory.id)}
        >
          <img src={subcategory.icon} alt={subcategory.name} />
          <span>{subcategory.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default SubcategoryList;
