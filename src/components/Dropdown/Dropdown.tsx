import React, { useRef, useEffect, useState } from "react";
import styles from "./Dropdown.module.scss";

interface DropdownItem {
  code: string;
  label: string;
  icon?: string; // Іконка тепер необов'язкова
}

interface DropdownProps {
  items: DropdownItem[];
  selectedItem: string;
  onSelect: (item: string) => void;
  className?: string; // Клас для загального контейнера
  menuClassName?: string; // Додаємо новий пропс для меню
  showIcons?: boolean;
  showIcon?: boolean;
  icon?: string;
  onToggle?: (isOpen: boolean) => void; // Додали подію для відкриття/закриття
  itemClassName?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  selectedItem,
  onSelect,
  className,
  menuClassName,
  showIcons = false, // Значення за замовчуванням - іконки не показуються у випадаючому списку
  showIcon = false, // Значення за замовчуванням - іконка на кнопці не показується
  icon, // Іконка на кнопці
  onToggle, // Нова подія
  itemClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        if (onToggle) {
          onToggle(false); // Викликаємо onToggle при закритті
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onToggle]);

  const toggleDropdown = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (onToggle) {
      onToggle(newIsOpen); // Викликаємо onToggle при зміні стану
    }
  };

  const handleSelect = (item: string) => {
    onSelect(item);
    setIsOpen(false);
    if (onToggle) {
      onToggle(false); // Викликаємо onToggle при закритті після вибору
    }
  };

  const selectedLabel =
    items.find((item) => item.code === selectedItem)?.label || "";

  return (
    <div
      className={`${styles["dropdown"]} ${className || ""}`}
      ref={dropdownRef}
    >
      <button className={styles["dropdown-toggle"]} onClick={toggleDropdown}>
        {showIcon && icon && (
          <img src={icon} alt="User Status" className={styles["icon"]} />
        )}
        {selectedLabel || (!showIcon && "Select")}
      </button>
      <div
        className={`${styles["dropdown-menu"]} ${isOpen ? styles.show : ""} ${
          menuClassName || ""
        }`}
      >
        {items.map((item) => (
          <div
            key={item.code}
            className={`${styles["dropdown-item"]} ${itemClassName || ""}`}
            onClick={() => handleSelect(item.code)}
          >
            {showIcons && item.icon && (
              <div className={styles["item-icon"]}>
                <img
                  src={item.icon}
                  alt={item.label}
                  className={styles["icon"]}
                />
              </div>
            )}
            <div className={styles["item-text"]}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
