import React from "react";
import styles from "./SortDropdown.module.scss";
import icon from "../../assets/icons/sort.svg";

export type SortOption =
  | "featured"
  | "priceAsc"
  | "priceDesc"
  | "popular"
  | "newest";

interface SortDropdownProps {
  selected: SortOption;
  onChange: (value: SortOption) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const sortOptions: { label: string; value: SortOption }[] = [
  { label: "Featured", value: "featured" },
  { label: "Price Low To High", value: "priceAsc" },
  { label: "Price High To Low", value: "priceDesc" },
  { label: "Most Popular", value: "popular" },
  { label: "Newest", value: "newest" },
];

const SortDropdown: React.FC<SortDropdownProps> = ({
  selected,
  onChange,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div className={styles.relative}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.sort_button}>
        <img src={icon} alt="sorting button" />
        <span>Sort By</span>
      </button>

      {isOpen && (
        <div className={styles.sort_menu}>
          <span>Sort By</span>
          {sortOptions.map((opt) => (
            <label key={opt.value} className={styles.option}>
              <input
                type="radio"
                name="sort"
                value={opt.value}
                checked={selected === opt.value}
                onChange={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={styles.radio}
              />
              <span className={styles.radioWrapper}>
                <span className={styles.customRadio} />
              </span>
              <span className={styles.label}>{opt.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
