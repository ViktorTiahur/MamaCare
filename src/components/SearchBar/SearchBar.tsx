import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import searchIcon from "../../assets/icons/icon-search-states-56.svg";

const SearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`${styles.searchContainer} ${
        isExpanded ? styles.expanded : ""
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search..."
      />
      <button className={styles.searchButton}>
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
