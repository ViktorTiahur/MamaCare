import { useState, useMemo } from "react";

import leftArrow from "@/assets/icons/arrow-left.svg";
import rightArrow from "@/assets/icons/arrow-right.svg";

import styles from "./ProductImageCarousel.module.scss";

interface Props {
  images: string[]; // очікуємо рівно 5 фото
}

const ProductImageCarousel: React.FC<Props> = ({ images }) => {
  // гарантуємо 5 картинок (на випадок, якщо бек коли-небудь дасть менше)
  const imgs = useMemo(() => images.slice(0, 5), [images]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % imgs.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  return (
    <div className={styles.wrapper} aria-label="Product image gallery">
      <div className={styles.mainImageWrapper}>
        <img
          src={imgs[activeIndex]}
          alt={`Product image ${activeIndex + 1} of ${imgs.length}`}
          className={styles.mainImage}
        />
        <button
          className={styles.arrowLeft}
          onClick={handlePrev}
          aria-label="Previous image"
          type="button"
        >
          <img src={leftArrow} alt="" aria-hidden="true" />
        </button>
        <button
          className={styles.arrowRight}
          onClick={handleNext}
          aria-label="Next image"
          type="button"
        >
          <img src={rightArrow} alt="" aria-hidden="true" />
        </button>
      </div>

      <div
        className={styles.thumbnailNav}
        style={{ ["--active-index" as string]: `${activeIndex}` }}
        aria-label="Thumbnails"
      >
        {imgs.map((img, index) => (
          <button
            key={index}
            type="button"
            className={styles.thumbBtn}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`${styles.thumbnail} ${
                index === activeIndex ? styles.active : ""
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageCarousel;
