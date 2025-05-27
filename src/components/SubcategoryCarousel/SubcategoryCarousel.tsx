import React, { useEffect, useState } from "react";
import styles from "./SubcategoryCarousel.module.scss";
import SubcategoryList from "../SubcategoryList/SubcategoryList";
import leftArrow from "../../assets/icons/arrow-left.svg";
import rightArrow from "../../assets/icons/arrow-right.svg";
import { SubcategoryProps } from "@/types/subcategory";

const SubcategoryCarousel: React.FC<SubcategoryProps> = ({
  subcategories,
  activeId,
  onSelect,
}) => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) setItemsPerPage(7);
      else if (window.innerWidth < 695) setItemsPerPage(3);
      else if (window.innerWidth < 860) setItemsPerPage(4);
      else if (window.innerWidth < 1280) setItemsPerPage(5);
      else setItemsPerPage(7);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, subcategories.length - itemsPerPage);

  const nextSlide = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const visibleSubcategories = subcategories.slice(index, index + itemsPerPage);

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <button onClick={prevSlide} className={styles.arrow}>
          <img src={leftArrow} alt="left" />
        </button>

        <SubcategoryList
          subcategories={visibleSubcategories}
          activeId={activeId}
          onSelect={onSelect}
        />

        <button onClick={nextSlide} className={styles.arrow}>
          <img src={rightArrow} alt="right" />
        </button>
      </div>
    </div>
  );
};

export default SubcategoryCarousel;
