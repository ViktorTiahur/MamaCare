import { useState, useEffect } from "react";

import leftArrow from "@/assets/icons/icon-arrov-left.svg";
import rightArrow from "@/assets/icons/icon-arrov-right.svg";
import ReviewCard from "@/components/Review/ReviewCard";
import reviews from "@/data/review.json";

import styles from "./ReviewCarousel.module.scss";

const ReviewCarousel = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Початкове значення для кількості карток на екрані

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Створюємо масив, який зациклює відображення карток
  const visibleReviews = [
    ...reviews,
    ...reviews.slice(0, itemsPerPage), // Додаємо перші елементи в кінець
  ].slice(index, index + itemsPerPage);

  // Оновлюємо кількість карток в залежності від ширини екрану
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 800) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize(); // Викликаємо при завантаженні компонента
    window.addEventListener("resize", handleResize); // Додаємо слухача для події resize

    return () => {
      window.removeEventListener("resize", handleResize); // Очищаємо слухач при демонтажі компонента
    };
  }, []); // Порожній масив залежностей означає, що цей ефект буде викликаний лише один раз при монтуванні компонента

  return (
    <div className={styles.carousel}>
      <h2 className={styles.title}>What Our Moms are Saying</h2>
      <div className={styles.carouselInner}>
        {visibleReviews.map((review, i) => (
          <ReviewCard key={`${review.id}-${i}`} {...review} />
        ))}
      </div>
      <div className={styles.controls}>
        <button onClick={prevSlide} className={styles.arrow}>
          <img src={leftArrow} alt="left-side" />
        </button>
        <button onClick={nextSlide} className={styles.arrow}>
          <img src={rightArrow} alt="right-side" />
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
