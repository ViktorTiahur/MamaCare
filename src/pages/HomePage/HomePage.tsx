import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import arrow from "@/assets/icons/icon-arrow.svg";
import BabyBoxSection from "@/components/BabyBoxSection/BabyBoxSection";
import Button from "@/components/Button/Button";
import ProductList from "@/components/ProductList/ProductList";
import ReviewCarousel from "@/components/ReviewCarousel/ReviewCarousel";

import styles from "./HomePage.module.scss";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const [itemsCount, setItemsCount] = useState({
    babyBoxItems: 3,
    pickItems: 8,
  });
  const {t} = useTranslation();


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setItemsCount({ babyBoxItems: 2, pickItems: 2 });
      } else if (window.innerWidth < 695) {
        setItemsCount({ babyBoxItems: 4, pickItems: 8 });
      } else if (window.innerWidth < 920) {
        setItemsCount({ babyBoxItems: 3, pickItems: 9 });
      } else {
        setItemsCount({ babyBoxItems: 3, pickItems: 8 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.homePage}>
      <div className={styles.containerBabyBoxed}>
        <Link to="/product" className={styles.title}>
          <img src={arrow} className={styles.arrow} alt="arrow link" />
        </Link>
        <BabyBoxSection
          title="Baby Boxes"
          itemsToShow={itemsCount.babyBoxItems}
        />
      </div>

      <div className={styles.containerPick}>
        <Link to="/pickandbuy" className={styles.title}>
          <h2>{t('Pick & Buy')}</h2>
          <img src={arrow} className={styles.arrow} alt="arrow link" />
        </Link>

        <ProductList
          customClass={styles.pickList}
          itemsToShow={itemsCount.pickItems}
        ></ProductList>
        <div className={styles.button}>
          <Button>{t('View all Products')}</Button>
        </div>
      </div>

      <div className={styles.containerReview}>
        <ReviewCarousel />
      </div>
    </div>
  );
};

export default HomePage;
