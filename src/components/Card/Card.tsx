import React from "react";
import styles from "./Card.module.scss";
import Button from "../Button/Button";

interface CardProps {
  title: string;
  price: number;
  // description: string;
  // brend: string;
  // color: string;
  // age: number;
  image: string;
  customClass?: string;
  onAddToCart?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  // description,
  price,
  // brend,
  image,
  customClass,
  onAddToCart,
}) => {
  return (
    <div className={`${styles.card} ${customClass || ""}`}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.addToCard}>
        <p>${price}</p>
        <Button onClick={onAddToCart} className={styles.addButton}>
          <span className={styles.plusIcon}>+</span>
        </Button>
      </div>
    </div>
  );
};

export default Card;
