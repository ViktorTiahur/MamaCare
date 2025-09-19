"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import arrow from "@/assets/icons/icon-arrow.svg";
import mockProducts from "@/data/mockProducts";
import { ProductDetail } from "@/types/productInterface";


import Button from "../Button/Button";
import ProductList from "../ProductList/ProductList";

import styles from "./BabyBoxSection.module.scss";
import { useResponsiveItems, type ResponsiveRule } from "./useResponsiveItems";


interface BabyBoxSectionProps {
  title: string;
  /** якщо хочеш зафіксувати кількість карток — просто передай items */
  items?: number;
  /** або ж передай правила для адаптиву; якщо не передав — є розумні дефолти */
  responsive?: ResponsiveRule[];
  lang?: "en" | "uk";
  showButton?: boolean;
  buttonLabel?: string;
  buttonOnClick?: () => void;
  linkHref?: string;
  className?: string;
  listClassName?: string;
}

const BabyBoxSection: React.FC<BabyBoxSectionProps> = ({
  title,
  items,
  responsive,
  lang,
  showButton = true,
  buttonLabel = "View all Gift Boxes",
  linkHref = "/product",
  className,
  listClassName,
}) => {
  const { i18n } = useTranslation();
  const resolvedLang: "en" | "uk" =
    lang ?? (i18n.language === "uk" ? "uk" : "en");

  const defaultItemsToShow = useResponsiveItems({  // стандартні налаштування відображення
    fixed: items,
    responsive,
    fallback: 3,
  });

  const data = mockProducts; // для зручності отримання продуктів

  const [itemsToShow, setItemsToShow] = useState(defaultItemsToShow); // записуєм стандартне значення
  const [buttonVisible, setButtonVisible] = useState(showButton);

  function changeItemsCount(arg: ProductDetail[]) {  // відкриваємо весь список товарів і приховуєм кнопку
    setItemsToShow(arg.length);
    setButtonVisible(false);
  }
  

  return (
    <div className={`${styles.containerBabyBoxed} ${className ?? ""}`}>
      <Link to={linkHref} className={styles.title}>
        <h2>{title}</h2>
        <img src={arrow} className={styles.arrow} alt="arrow link" />
      </Link>

      <ProductList
        customClass={`${styles.babyBoxedList} ${listClassName ?? ""}`}
        itemsToShow={itemsToShow}
        lang={resolvedLang}
      />

      {buttonVisible && (
        <div className={styles.button}>
          <Button onClick={() => changeItemsCount(data)}>{buttonLabel}</Button>
        </div>
      )}
    </div>
  );
};

export default BabyBoxSection;
