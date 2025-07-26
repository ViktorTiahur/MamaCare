import React, { useState, useEffect } from "react";

import { slides } from "../../constants/slides";
import Button from "../Button/Button";

import styles from "./BannerCarousel.module.scss";

const BannerCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.bannerCarousel}>
      {/* {slides.map((slide, index) => (
        <div key={index} className={styles.inscription}>
          <div
            style={{ backgroundImage: slide.backgroundImage }}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
          >
            <div className={styles.bannerText}>
              <p className={styles.legend}>{slide.legendText}</p>
              <Button
                as="a"
                className={styles.bannerButton}
                href={slide.buttonLink}
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        </div>
      ))} */}

      {slides.map((slide, index) => (
        <div key={index} className={styles.inscription}>
          <div
            className={`${styles.slide} ${styles[`slide-${index}`]} ${
              index === currentSlide ? styles.active : ""
            }`}
          >
            <div className={styles.bannerText}>
              <p className={styles.legend}>{slide.legendText}</p>
              <Button
                as="a"
                className={styles.bannerButton}
                href={slide.buttonLink}
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
