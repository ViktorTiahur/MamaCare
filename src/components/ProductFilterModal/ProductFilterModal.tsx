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
        { label: "0-3m", value: "0-3 months" },
        { label: "12-18m", value: "12-18 months" },
        { label: "1 year", value: "1 year" },
        { label: "2 years", value: "2 years" },
        { label: "3 years", value: "3 years" },
        { label: "4 years", value: "4 years" },
        { label: "5 years", value: "5 years" },
        { label: "6 years", value: "6 years" },
        { label: "7 years", value: "7 years" },
      ],
    },
    {
      id: "brand",
      name: "Brand",
      options: [
        { label: "Brand", value: "Brand" },
        { label: "SoftCare", value: "SoftCare" },
        { label: "EcoMama", value: "EcoMama" },
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
