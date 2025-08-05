import React from "react";
import { Link } from "react-router-dom";

import Button from "@/components/Button/Button";

import styles from "./Card.module.scss";

interface CardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  customClass?: string;
  onAddToCart?: () => void;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  price,
  image,
  customClass,
  onAddToCart,
}) => {
  return (
    <div className={`${styles.card} ${customClass || ""}`}>
      <Link to={`/product/${id}`} className={styles.cardLink}>
        <img src={image} alt={name} className={styles.cardImage} />
        <h2 className={styles.title}>{name}</h2>
      </Link>

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
