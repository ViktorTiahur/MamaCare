import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.scss";
import ProductList from "../../components/ProductList/ProductList";
import Button from "../../components/Button/Button";
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel";
import BabyBoxSection from "../../components/BabyBoxSection/BabyBoxSection";
import arrow from "../../assets/icons/icon-arrow.svg";
const HomePage: React.FC = () => {
  const [itemsCount, setItemsCount] = useState({
    babyBoxItems: 3,
    pickItems: 8,
  });

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth < 480) {
        setItemsCount({ babyBoxItems: 2, pickItems: 2 });
      }
      else if (window.innerWidth < 695) {
        setItemsCount({ babyBoxItems: 4, pickItems: 8 });
      } else if (window.innerWidth < 920) {
        setItemsCount({ babyBoxItems: 3, pickItems: 9 });
      } else {
        setItemsCount({ babyBoxItems: 3, pickItems: 8 });
      }
    };

    handleResize(); // Викликаємо при завантаженні
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.homePage}>
 
      <div className={styles.containerBabyBoxed}>
        <BabyBoxSection
          title="Baby Boxes"
          itemsToShow={itemsCount.babyBoxItems}
        />
      </div>

      <div className={styles.containerPick}>
          <a href="#" className={styles.title}>
            <h2>Pick & Buy</h2>
            <img src={arrow} className={styles.arrow} alt="arrow link" />
          </a>

        <ProductList
          customClass={styles.pickList}
          itemsToShow={itemsCount.pickItems}
        ></ProductList>
        <div className={styles.button}>
          <Button>View all Products</Button>
        </div>
      </div>

      <div className={styles.containerReview}>
        <ReviewCarousel />
      </div>
    </div>
  );
};

export default HomePage;
