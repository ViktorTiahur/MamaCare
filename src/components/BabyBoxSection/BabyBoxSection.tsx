import React from "react";
import styles from "./BabyBoxSection.module.scss";
import ProductList from "../ProductList/ProductList";
import Button from "../Button/Button";
import arrow from '../../assets/icons/icon-arrow.svg'

interface BabyBoxSectionProps {
  itemsToShow: number;
  title: string;
}

const BabyBoxSection: React.FC<BabyBoxSectionProps> = ({
  itemsToShow,
  title,
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
      />
      <div className={styles.button}>
        <Button>View all Gift Boxes</Button>
      </div>
    </div>
  );
};

export default BabyBoxSection;
