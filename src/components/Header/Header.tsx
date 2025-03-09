import React, { useState } from "react";
import styles from "./Header.module.scss";
import BannerCarousel from "../BannerCarousel/BannerCarousel";
import Button from "../Button/Button";
import logoIcon from "../../assets/icons/logoIcon.svg";
import searchIcon from "../../assets/icons/icon-search-states-56.svg";
import cartIcon from "../../assets/icons/icon-cart-states-56.svg";
import userIcon from "../../assets/icons/icon-account-states-56.svg";
import burgerMenu from "../../assets/icons/icon-hamburger menu-states-56.svg";
import burgerClose from "../../assets/icons/icon-burger-close.svg";
import SearchBar from "../SearchBar/SearchBar";
import NavLink from "../NavLink/Navlink";
import LanguageDropdown from "../LanguageSwitcher/LanguageDropdown";
import Dropdown from "../Dropdown/Dropdown";
import arrowIcon from "../../assets/icons/icon-arrow.svg";

const Header: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const languages = [
    { code: "ua", label: "UKR" },
    { code: "en", label: "ENG" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.buttons}>
          <Button className={styles.burgerMenu} onClick={toggleSidebar}>
            <img src={burgerMenu} alt="burgerMenu" />
          </Button>
          <div className={styles.logo}>MamaCare</div>

          <nav className={styles.leftButtons}>
            <Button className={styles.baby}>Baby Box</Button>
            <Button className={styles.pick}>Pick & Buy</Button>
            <Button className={styles.home}>How It Works</Button>
            <Button className={styles.about}>About Us</Button>
          </nav>
        </div>
        <div className={`${styles.buttons} ${styles.rightButtons}`}>
          <Dropdown
            items={languages}
            selectedItem={selectedLang}
            onSelect={setSelectedLang}
          />
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

      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <Button className={styles.burgerClose} onClick={toggleSidebar}>
            <img src={burgerClose} alt="burgerCloseMenu" />
          </Button>
          <div className={styles.logo}>MamaCare</div>
        </div>

        <nav className={styles.sidebarNav}>
          <div className={styles.navItem}>
            <Button className={styles.navButton}>Baby Box</Button>
            <img src={arrowIcon} alt="Arrow" className={styles.arrowIcon} />
          </div>
          <div className={styles.navItem}>
            <Button className={styles.navButton}>Pick & Buy</Button>
            <img src={arrowIcon} alt="Arrow" className={styles.arrowIcon} />
          </div>
          <div className={styles.navItem}>
            <Button className={styles.navButton}>How It Works</Button>
            <img src={arrowIcon} alt="Arrow" className={styles.arrowIcon} />
          </div>
          <div className={styles.navItem}>
            <Button className={styles.navButton}>About Us</Button>
            <img src={arrowIcon} alt="Arrow" className={styles.arrowIcon} />
          </div>
        </nav>
      </div>

      {isSidebarOpen && (
        <div className={styles.overlay} onClick={toggleSidebar}></div>
      )}
    </header>
  );
};

export default Header;
