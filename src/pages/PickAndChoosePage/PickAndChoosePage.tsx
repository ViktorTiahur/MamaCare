import React, { useState } from "react";
import styles from "./PickAndChoosePage.module.scss";
import { subcategories } from "@/data/mockData";
import SubcategoryCarousel from "@/components/SubcategoryCarousel/SubcategoryCarousel";


const PickAndChoosePage: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(
    null
  );

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Pick & Buy</h1>
     
      <section className={styles.subcategories}>
        <SubcategoryCarousel
          subcategories={subcategories}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </section>
      <section className={styles.products}>
        <div className={styles.filters}></div>
      </section>
    </div>
  );
};

export default PickAndChoosePage;
