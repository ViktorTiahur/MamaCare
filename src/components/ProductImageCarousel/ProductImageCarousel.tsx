import { useState } from "react";

import leftArrow from "@/assets/icons/arrow-left.svg";
import rightArrow from "@/assets/icons/arrow-right.svg";

import styles from "./ProductImageCarousel.module.scss";

interface Props {
  images: string[];
}

const ProductImageCarousel: React.FC<Props> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxVisible = 5;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getThumbnails = () => {
    const half = Math.floor(maxVisible / 2);
    const result = [];

    for (let i = -half; i <= half; i++) {
      const index = (activeIndex + i + images.length) % images.length;
      result.push({ img: images[index], index });
    }

    return result;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainImageWrapper}>
        <img src={images[activeIndex]} alt={`Image ${activeIndex + 1}`} />
        <button className={styles.arrowLeft} onClick={handlePrev}>
          <img src={leftArrow} alt="prev" />
        </button>
        <button className={styles.arrowRight} onClick={handleNext}>
          <img src={rightArrow} alt="next" />
        </button>
      </div>

      <div className={styles.thumbnailNav}>
        {getThumbnails().map(({ img, index }) => (
          <img
            key={index}
            src={img}
            className={`${styles.thumbnail} ${
              index === activeIndex ? styles.active : ""
            }`}
            onClick={() => setActiveIndex(index)}
            alt={`Thumbnail ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageCarousel;
