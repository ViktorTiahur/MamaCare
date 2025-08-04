import React, { useState, useRef, useEffect } from "react";

import styles from "./LanguageDropdown.module.scss";

interface Language {
  code: string;
  label: string;
}

const languages: Language[] = [
  { code: "ua", label: "UKR" },
  { code: "en", label: "ENG" },
];

const LanguageDropdown: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string>("en");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Закриваємо Dropdown при кліку поза його межами
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

  const handleSelect = (lang: string) => {
    setSelectedLang(lang);
    setIsOpen(false);
    // console.log("Вибрана мова:", lang);
    // Додаткову логіку зміни мови можна реалізувати тут (наприклад, i18n)
  };

  // Отримуємо поточну вибрану мову та доступні мови
  const currentLang = languages.find((lang) => lang.code === selectedLang);
  const otherLang = languages.find((lang) => lang.code !== selectedLang);

  return (
    <div className={styles["language-dropdown"]} ref={dropdownRef}>
      <button className={styles["dropdown-toggle"]} onClick={toggleDropdown}>
        {currentLang?.label}
      </button>
      {isOpen && (
        <div className={styles["dropdown-menu"]}>
          <div
            className={styles["dropdown-item"]}
            onClick={() => handleSelect(currentLang?.code || "")}
          >
            {currentLang?.label}
          </div>
          <div
            className={styles["dropdown-item"]}
            onClick={() => handleSelect(otherLang?.code || "")}
          >
            {otherLang?.label}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
