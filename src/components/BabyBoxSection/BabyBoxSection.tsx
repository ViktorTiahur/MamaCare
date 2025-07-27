import React from "react";

import arrow from '../../assets/icons/icon-arrow.svg'
import Button from "../Button/Button";
import ProductList from "../ProductList/ProductList";

import styles from "./BabyBoxSection.module.scss";

interface BabyBoxSectionProps {
  itemsToShow: number;
  title: string;
  lang: "en" | "uk";
}

const BabyBoxSection: React.FC<BabyBoxSectionProps> = ({
  itemsToShow,
  title,
  lang
}) => {
  return (
    <div className={styles.containerBabyBoxed}>

 <a href="#" className={styles.title}>
            <h2>{title}</h2>
            <img src={arrow} className={styles.arrow} alt="arrow link" />
          </a>



      <ProductList
        customClass={styles.babyBoxedList}
        itemsToShow={itemsToShow}
        lang={lang}
      />
      <div className={styles.button}>
        <Button>View all Gift Boxes</Button>
      </div>
    </div>
  );
};

export default BabyBoxSection;
