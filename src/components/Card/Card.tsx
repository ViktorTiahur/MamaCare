import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  price: number;
  description: string;
  brend: string;
  color: string;
  age: number;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  price,
  brend,
  color,
  age,
}) => {
  return (
    <div className={styles["card"]}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <p>{brend}</p>
      <p>{color}</p>
      <p>{age}</p>
    </div>
  );
};

export default Card;
