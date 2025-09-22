import React, { useState, useRef, useEffect, useCallback } from "react";

import arrow from "@/assets/icons/arrow.svg";
import close from "@/assets/icons/clothe.svg";
import checkbox from "@/assets/icons/galka.svg";

import styles from "./ProductFilterModal.module.scss";

const ProductFilterModal = ({
  isOpen,
  onClose,
  onApply,
  matchCount = 0,
  selectedFilters,
  onChange,
  triggerRef,
}: {
  isOpen: boolean;
  onClose: () => void;
  onApply: (selected: Record<string, string[]>) => void;
  matchCount?: number;
  selectedFilters: Record<string, string[]>;
  onChange: (updated: Record<string, string[]>) => void;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}) => {
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        !triggerRef?.current?.contains(e.target as Node)
      ) {
        onClose();
      }
    },
    [onClose, triggerRef]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  const filters = [
    {
      id: "age",
      name: "Age",
      options: [
        { label: "Newborn (0-3 Months)", value: "0-3 months" },
        { label: "3-6 Months", value: "3-6" },
        { label: "6-9 Months", value: "6-9" },
        { label: "9-12 Months", value: "9-12" },
        { label: "12-18 Months", value: "12-18" },
        { label: "18-24 Months", value: "18-24" },
        { label: "2 Years", value: "2 years" },
        {
          label: "3 Years + (or specific ranges like 2-3 Years, 3-4 Years)",
          value: "3 years+",
        },
      ],
    },
    {
      id: "brand",
      name: "Brand",
      options: [
        { label: "Brand", value: "Brand" },
        { label: "SoftCare", value: "SoftCare" },
        { label: "EcoMama", value: "EcoMama" },
        { label: "Carter's", value: "Carter's" },
        { label: "Graco", value: "Graco" },
        { label: "Fisher-Price", value: "Fisher-Price" },
        { label: "Skip Hop", value: "Skip Hop" },
        { label: "Graco", value: "Graco" },
        { label: "Chicco", value: "Chicco" },
      ],
    },
    {
      id: "availableColors",
      name: "Color",
      options: [
        { label: "Red", value: "Red" },
        { label: "Yellow", value: "Yellow" },
        { label: "Black", value: "Black" },
        { label: "Grey", value: "Grey" },
        { label: "White", value: "White" },
        { label: "Green", value: "Green" },
        { label: "Blue", value: "Blue" },
        { label: "Pink", value: "Pink" },
        { label: "Purple", value: "Purple" },
        { label: "Orange", value: "Orange" },
        { label: "Brown", value: "Brown" },
        { label: "Patterned", value: "Patterned" },
        { label: "Multi-color", value: "Multi-color" },
      ],
    },
    {
      id: "gender",
      name: "Gender",
      options: [
        { label: "Boy", value: "Boy" },
        { label: "Girl", value: "Girl" },
        { label: "Unisex / Gender-Neutral", value: "Unisex / Gender-Neutral" },
      ],
    },
    {
      id: "accessories",
      name: "Accessories",
      options: [
        { label: "Bibs & Burp Cloths", value: "Bibs & Burp Cloths" },
        { label: "Hats & Mittens", value: "Hats & Mittens" },
        { label: "Socks & Booties", value: "Socks & Booties" },
        { label: "Pacifiers & Teethers", value: "Pacifiers & Teethers" },
        { label: "Bottles & Sippy Cups", value: "Bottles & Sippy Cups" },
        { label: "Diaper Bags", value: "Diaper Bags" },
        { label: "Hair Accessories", value: "Hair Accessories" },
        { label: "Sunglasses", value: "Sunglasses" },
      ],
    },
    {
      id: "toys",
      name: "Toys",
      options: [
        { label: "Rattles & Teethers", value: "Rattles & Teethers" },
        {
          label: "Stuffed Animals & Plush Toys",
          value: "Stuffed Animals & Plush Toys",
        },
        {
          label: "Building Blocks & Stacking Toys",
          value: "Building Blocks & Stacking Toys",
        },
        {
          label: "Activity Gyms & Playmats",
          value: "Activity Gyms & Playmats",
        },
        { label: "Bath Toys", value: "Bath Toys" },
        { label: "Musical Toys", value: "Musical Toys" },
        {
          label: "Learning & Developmental Toys",
          value: "Learning & Developmental Toys",
        },
        { label: "Ride-On Toys", value: "Ride-On Toys" },
        { label: "Push & Pull Toys", value: "Push & Pull Toys" },
      ],
    },
    {
      id: "textiles",
      name: "Textiles",
      options: [
        {
          label: "Blankets (Swaddles, Receiving, Wearable)",
          value: "Blankets (Swaddles, Receiving, Wearable)",
        },
        {
          label: "Bedding (Crib Sheets, Mattress Protectors)",
          value: "Bedding (Crib Sheets, Mattress Protectors)",
        },
        { label: "Towels & Washcloths", value: "Towels & Washcloths" },
        { label: "Muslin Squares", value: "Muslin Squares" },
      ],
    },
    {
      id: "clothing",
      name: "Clothing",
      options: [
        { label: "Bodysuits (Onesies)", value: "Bodysuits (Onesies)" },
        { label: "Tops (T-shirts, Shirts)", value: "Tops (T-shirts, Shirts)" },
        {
          label: "Bottoms (Pants, Leggings, Shorts)",
          value: "Bottoms (Pants, Leggings, Shorts)",
        },
        { label: "Dresses & Skirts", value: "Dresses & Skirts" },
        {
          label: "Sleepwear (Pajamas, Sleep Sacks)",
          value: "Sleepwear (Pajamas, Sleep Sacks)",
        },
        {
          label: "Outerwear (Jackets, Coats, Snowsuits)",
          value: "Outerwear (Jackets, Coats, Snowsuits)",
        },
        { label: "Swimwear", value: "Swimwear" },
        { label: "Shoes", value: "Shoes" },
        { label: "Sets & Outfits", value: "Sets & Outfits" },
      ],
    },
  ];

  const toggleCheckbox = (categoryId: string, value: string) => {
    const current = selectedFilters[categoryId] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];

    onChange({ ...selectedFilters, [categoryId]: updated });
  };

  const totalSelected = Object.values(selectedFilters ?? {}).flat().length;

  const handleApply = () => {
    onApply(selectedFilters);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal} ref={modalRef}>
        <h2>Filter By</h2>
        {totalSelected > 0 && (
          <div className={styles.appliedFilters}>
            <h4>Applied Filters</h4>
            <div className={styles.tags}>
              {Object.entries(selectedFilters).flatMap(([key, values]) =>
                values.map((val) => (
                  <span key={`${key}-${val}`} className={styles.tag}>
                    {val}
                    <button
                      className={styles.remove}
                      onClick={() => {
                        const updated = selectedFilters[key].filter(
                          (v) => v !== val
                        );
                        const newFilters = {
                          ...selectedFilters,
                          [key]: updated,
                        };
                        onChange(newFilters);
                      }}
                    >
                      <img src={close} alt="close tag button" width="14px" />
                    </button>
                  </span>
                ))
              )}
              <button className={styles.clearAll} onClick={() => onChange({})}>
                Clear All
              </button>
            </div>
          </div>
        )}

        <div className={styles.filters}>
          {filters.map((filter) => (
            <div key={filter.id} className={styles.filterGroup}>
              <button
                className={styles.toggle}
                onClick={() =>
                  setExpandedFilter((f) => (f === filter.id ? null : filter.id))
                }
              >
                <img
                  src={arrow}
                  alt="filter open arrow"
                  className={`${styles.icon} ${
                    expandedFilter === filter.id ? styles.rotated : ""
                  }`}
                />

                {filter.name}
              </button>
              <div
                className={`${styles.options} ${
                  expandedFilter === filter.id ? styles.open : ""
                }`}
              >
                {filter.options.map((option) => (
                  <label key={option.value} className={styles.option}>
                    <input
                      type="checkbox"
                      checked={
                        selectedFilters[filter.id]?.includes(option.value) ||
                        false
                      }
                      onChange={() => toggleCheckbox(filter.id, option.value)}
                    />
                    <div className={styles.checkboxIcon}>
                      <img src={checkbox} alt="" />
                    </div>
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className={styles.applyButton} onClick={handleApply}>
          View {matchCount} Results
        </button>
      </div>
    </div>
  );
};

export default ProductFilterModal;
