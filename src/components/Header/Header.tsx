import React, { useState } from "react";
import styles from "./Header.module.scss";
import BannerCarousel from "../BannerCarousel/BannerCarousel";
import Button from "../Button/Button";
import searchIcon from "../../assets/icons/icon-search-states-56.svg";
import cartIcon from "../../assets/icons/icon-cart-states-56.svg";
import userIcon from "../../assets/icons/icon-account-states-56.svg";
import burgerMenu from "../../assets/icons/icon-hamburger menu-states-56.svg";
import burgerClose from "../../assets/icons/icon-burger-close.svg";
import userIconSmall from "../../assets/icons/icon-user-19.svg";
import userLogin from "../../assets/icons/icon-log-in19.svg";
import userLogOut from "../../assets/icons/icon-log-out19.svg";
// import NavLink from "../NavLink/Navlink";
import Dropdown from "../Dropdown/Dropdown";
import arrowIcon from "../../assets/icons/icon-arrow.svg";
import SearchModal from "../SearchModal/SearchModal";

const Header: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Змінна для статусу авторизації
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangDropdownActive, setIsLangDropdownActive] = useState(false);

  const languages = [
    { code: "en", label: "ENG" },
    { code: "ua", label: "UKR" },
  ];

  const authorizedItems = [
    { code: "myProfil", label: "My Profil", icon: userIconSmall },
    { code: "logOut", label: "Log out", icon: userLogOut },
  ];

  const unauthorizedItems = [
    { code: "login", label: "Log in", icon: userLogin },
    { code: "register", label: "Sign up", icon: userIconSmall },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLangDropdownToggle = (isOpen: boolean) => {
    setIsLangDropdownActive(isOpen); // Оновлюємо стан
  };

  const handleUserSelect = (item: string) => {
    if (item === "logOut") {
      // Логіка виходу користувача
      setIsAuthenticated(false);
    } else if (item === "login") {
      // Логіка авторизації користувача
      setIsAuthenticated(true);
    }
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
            <Button className={styles.home}>FAQ</Button>
            <Button className={styles.about}>About Us</Button>
          </nav>
        </div>
        <div className={`${styles.buttons} ${styles.rightButtons}`}>
          <Dropdown
            className={styles.langDropdown}
            items={languages}
            selectedItem={selectedLang}
            onSelect={setSelectedLang}
            menuClassName={styles.langDropdownMenu}
          />
          <Button
            className={styles.search}
            onClick={() => setIsSearchOpen(true)}
          >
            <img src={searchIcon} alt="Search" />
          </Button>

          {isSearchOpen && (
            <SearchModal onClose={() => setIsSearchOpen(false)} />
          )}

          <Button className={styles.cart}>
            <img src={cartIcon} alt="Cart" />
          </Button>

          <Dropdown
            className={styles.userDropdown}
            items={isAuthenticated ? authorizedItems : unauthorizedItems}
            selectedItem=""
            onSelect={handleUserSelect}
            showIcons={true} // Відображаємо іконки у випадаючому списку
            showIcon={true} // Відображаємо іконку на кнопці
            icon={userIcon} // Використовуємо іконку користувача
            menuClassName={styles.userDropdownMenu}
            itemClassName={styles.userDropdownItem}
          />
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

          <Dropdown
            className={styles.langDropdown}
            items={languages}
            selectedItem={selectedLang}
            onSelect={setSelectedLang}
            onToggle={handleLangDropdownToggle}
            menuClassName={styles.langDropdownMenu}
          />
        </nav>

        <div
          className={`${styles.sidebarOverlay} ${
            isSidebarOpen ? styles.open : ""
          } ${isLangDropdownActive ? styles.langDropdownActive : ""}`}
        ></div>
      </div>

      {isSidebarOpen && (
        <div
          className={`${styles.overlay} ${isSidebarOpen ? styles.open : ""} ${
            isLangDropdownActive ? styles.langDropdownActive : ""
          }`}
        ></div>
      )}
    </header>
  );
};

export default Header;
