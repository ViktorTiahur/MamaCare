import React, { useState } from "react";
import "./ProductCard.module.scss";

interface CardProps {
  image: string;
  title: string;
  rating: number; // Від 0 до 5
  description: string;
  price: number;
}

const ProductCard: React.FC<CardProps> = ({ image, title, rating, description, price }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleCartClick = () => {
    setIsAddedToCart(!isAddedToCart);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
        <div className="card__rating">
          {"★".repeat(rating) + "☆".repeat(5 - rating)}
        </div>
      </div>
      <p className="card__description">{description}</p>
      <div className="card__footer">
        <span className="card__price">${price.toFixed(2)}</span>
        <button className="card__cart-button" onClick={handleCartClick}>
          {isAddedToCart ? "✔" : "➕"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
