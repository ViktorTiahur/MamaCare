"use client";

import React from "react";
import { useTranslation } from "react-i18next";

import arrow from "@/assets/icons/icon-arrow.svg";

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
  buttonOnClick,
  linkHref = "#",
  className,
  listClassName,
}) => {
  const { i18n } = useTranslation();
  const resolvedLang: "en" | "uk" =
    lang ?? (i18n.language === "uk" ? "uk" : "en");

  const itemsToShow = useResponsiveItems({
    fixed: items,
    responsive,
    fallback: 3,
  });

  return (
    <div className={`${styles.containerBabyBoxed} ${className ?? ""}`}>
      <a href={linkHref} className={styles.title}>
        <h2>{title}</h2>
        <img src={arrow} className={styles.arrow} alt="arrow link" />
      </a>

      <ProductList
        customClass={`${styles.babyBoxedList} ${listClassName ?? ""}`}
        itemsToShow={itemsToShow}
        lang={resolvedLang}
      />

      {showButton && (
        <div className={styles.button}>
          <Button onClick={buttonOnClick}>{buttonLabel}</Button>
        </div>
      )}
    </div>
  );
};

export default BabyBoxSection;
