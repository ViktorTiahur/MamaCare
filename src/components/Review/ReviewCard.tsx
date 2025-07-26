import React from "react";

import star from "../../assets/icons/icon-star-24.svg";

import styles from "./ReviewCard.module.scss";

interface ReviewProps {
  image: string;
  name: string;
  rating: number;
  text: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ image, name, rating, text }) => {
  return (
    <div className={styles.reviewCard}>
      <img src={image} alt={name} className={styles.image} />
      <div>
        <div className={styles.name}>
          <h3>{name}</h3>
          <div className={styles.rating}>
            {Array.from({ length: rating }).map((_, index) => (
              <img key={index} src={star} alt="Star" className={styles.star} />
            ))}
          </div>
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
