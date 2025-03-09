import React, { useRef, useEffect, useState } from "react";
import styles from "./Dropdown.module.scss";

interface DropdownItem {
  code: string;
  label: string;
}

interface DropdownProps {
  items: DropdownItem[];
  selectedItem: string;
  onSelect: (item: string) => void;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  selectedItem,
  onSelect,
  className,
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
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  const selectedLabel =
    items.find((item) => item.code === selectedItem)?.label || "Select";

  return (
    <div
      className={`${styles["dropdown"]} ${className || ""}`}
      ref={dropdownRef}
    >
      <button className={styles["dropdown-toggle"]} onClick={toggleDropdown}>
        {selectedLabel}
      </button>
      <div className={`${styles["dropdown-menu"]} ${isOpen ? styles.show : ""}`}>

          {items.map((item) => (
            <div
              key={item.code}
              className={styles["dropdown-item"]}
              onClick={() => handleSelect(item.code)}
            >
              {item.label}
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default Dropdown;
