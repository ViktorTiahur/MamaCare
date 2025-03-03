import React, { useState } from "react";
import styles from "./Header.module.scss";
import BannerCarousel from "../BannerCarousel/BannerCarousel";
import Button from "../Button/Button";
import searchIcon from "../../assets/icons/icon-search-states-56.svg";
import cartIcon from "../../assets/icons/icon-cart-states-56.svg";
import userIcon from "../../assets/icons/icon-account-states-56.svg";

const Header: React.FC = () => {
  const [language, setLanguage] = useState("ENG");
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.buttons}>
          <div className={styles.logo}>MamaCare</div>
          <nav className={`${styles.buttons} ${styles.leftButtons}`}>
            <Button className={styles.about}>About Us</Button>
            <Button className={styles.pick}>Pick & Buy</Button>
            <Button className={styles.baby}>Baby Box</Button>
            <Button className={styles.home}>How It Works</Button>
          </nav>
        </div>
        <div className={`${styles.buttons} ${styles.rightButtons}`}>
          <select
            className={styles.language}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="ENG">ENG</option>
            <option value="UKR">UKR</option>
          </select>
          <Button className={styles.search}>
            <img src={searchIcon} alt="Search" />
          </Button>
          <Button className={styles.cart}>
            <img src={cartIcon} alt="Cart" />
          </Button>
          <Button className={styles.user}>
            <img src={userIcon} alt="User" />
          </Button>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <BannerCarousel />
      </div>
    </header>
  );
};

export default Header;
