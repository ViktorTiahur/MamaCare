import React, {  useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import userIcon from "../../assets/icons/icon-account-states-56.svg";
import arrowIcon from "../../assets/icons/icon-arrow.svg";
import burgerClose from "../../assets/icons/icon-burger-close.svg";
import cartIcon from "../../assets/icons/icon-cart-states-56.svg";
import burgerMenu from "../../assets/icons/icon-hamburger menu-states-56.svg";
import userLogin from "../../assets/icons/icon-log-in19.svg";
import userLogOut from "../../assets/icons/icon-log-out19.svg";
import searchIcon from "../../assets/icons/icon-search-states-56.svg";
import userIconSmall from "../../assets/icons/icon-user-19.svg";
import BannerCarousel from "../BannerCarousel/BannerCarousel";
import Button from "../Button/Button";
// import NavLink from "../NavLink/Navlink";
import Dropdown from "../Dropdown/Dropdown";
import SearchModal from "../SearchModal/SearchModal";
// import { useLocation } from "react-router-dom";

import styles from "./Header.module.scss";
import useResize from "@/hooks/useResize";

const Header: React.FC = () => {
  const {i18n,t} = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language || "en"); // Встановлюємо мову за замовчуванням
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Змінна для статусу авторизації
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangDropdownActive, setIsLangDropdownActive] = useState(false);

  const languages = [
    { code: "en", label: "ENG" },
    { code: "uk", label: "UKR" },
  ];

  const authorizedItems = [
    { code: "myProfil", label: t("Header.My Profile"), icon: userIconSmall },
    { code: "logOut", label: t("Header.Log out"), icon: userLogOut },
  ];

  const unauthorizedItems = [
    { code: "login", label: t("Header.Log in"), icon: userLogin },
    { code: "register", label: t("Header.Sign up"), icon: userIconSmall },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLangDropdownToggle = (isOpen: boolean) => {
    setIsLangDropdownActive(isOpen);
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

  // Зміна мови при виборі з випадаючого списку
  function handleSetLaguage(lang : string) {
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
  };

  const width = useResize();

  useEffect(() => {
    if (width) {setIsSidebarOpen(false)} //якщо вікно збільшилось до моменту коли не має показуватись сайдбар, закриваєм його примусово
  }, [width])
  

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.buttons}>
          <Button className={styles.burgerMenu} onClick={toggleSidebar}>
            <img src={burgerMenu} alt="burgerMenu" />
          </Button>
          <Link to="/">
            <div className={styles.logo}>MamaCare</div>
          </Link>

          <nav className={styles.leftButtons}>
            <Link to="/product" className={styles.link}>
              {t('Header.Baby Box')}
            </Link>
            <Link to="/pickandbuy" className={styles.link}>
              {t('Header.Pick & Buy')}
            </Link>
            <Link to="/about" className={styles.link}>
              {t('Header.About Us')}
            </Link>
            <Link to="/faq" className={styles.link}>
              {t('Header.FAQ')}
            </Link>
          </nav>
        </div>
        <div className={`${styles.buttons} ${styles.rightButtons}`}>
          <Dropdown
            className={styles.langDropdown}
            items={languages}
            selectedItem={selectedLang}
            onSelect={handleSetLaguage}
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
            showIcons={true}
            showIcon={true}
            icon={userIcon}
            menuClassName={styles.userDropdownMenu}
            itemClassName={styles.userDropdownItem}
          />
        </div>
      </div>

      {location.pathname === "/" && (
        <div className={styles.bottomBar}>
          <BannerCarousel />
        </div>
      )}

      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <Button className={styles.burgerClose} onClick={toggleSidebar}>
            <img src={burgerClose} alt="burgerCloseMenu" />
          </Button>

          <div className={styles.logo}>MamaCare</div>
        </div>

        <nav className={styles.sidebarNav}>
          <div className={styles.navItem}>
            <Link
              to="/product"
              className={styles.navButton}
              onClick={toggleSidebar}
            >
              {t('Header.Baby Box')}
            </Link>
            <img src={arrowIcon} alt="Arrow" className={styles.arrowIcon} />
          </div>
          <div className={styles.navItem}>
            <Link
              to="/pickandbuy"
              className={styles.navButton}
              onClick={toggleSidebar}
            >
              {t('Header.Pick & Buy')}
            </Link>
            <img src={arrowIcon} alt="Arrow" className={styles.arrowIcon} />
          </div>

          <div className={styles.navItem}>
            <Link
              to="/about"
              className={styles.navButton}
              onClick={toggleSidebar}
            >
              {t('Header.About Us')}
            </Link>
            <img src={arrowIcon} alt="Arrow" className={styles.arrowIcon} />
          </div>
          <div className={styles.navItem}>
            <Link
              to="/faq"
              className={styles.navButton}
              onClick={toggleSidebar}
            >
              {t('Header.FAQ')}
            </Link>
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
