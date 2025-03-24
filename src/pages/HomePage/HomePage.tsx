import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.scss";
import ProductList from "../../components/ProductList/ProductList";
import Button from "../../components/Button/Button";
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel";

const HomePage: React.FC = () => {
  const [itemsCount, setItemsCount] = useState({
    babyBoxItems: 3,
    pickItems: 8,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 695) {
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
        <h2 className={styles.title}>Baby Boxes</h2>
        <ProductList
          customClass={styles.babyBoxedList}
          itemsToShow={itemsCount.babyBoxItems}
        ></ProductList>
        <div className={styles.button}>
          <Button>View all Gift Boxes</Button>
        </div>
      </div>

      <div className={styles.containerPick}>
        <h2 className={styles.title}>Pick & Buy</h2>
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
