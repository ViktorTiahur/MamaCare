import React from "react";
import "./Card.module.scss";

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
  desriprion,
  price,
  brend,
  color,
  age,
}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{desriprion}</p>
      <p>{price}</p>
      <p>{brend}</p>
      <p>{color}</p>
      <p>{age}</p>
    </div>
  );
};

export default Card;
