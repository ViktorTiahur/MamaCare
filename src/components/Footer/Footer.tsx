import { FC } from "react";
import {
  Facebook,
  LinkedIn,
  YouTube,
  Instagram,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";
import NavLink from "../NavLink/Navlink";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandSection}>
          <h2 className={styles.title}>MamaCare</h2>
          <div className={styles.socialIcons}>
            <Facebook className={styles.icon} />
            <LinkedIn className={styles.icon} />
            <YouTube className={styles.icon} />
            <Instagram className={styles.icon} />
          </div>
        </div>

        <nav className={styles.nav}>
          <div className={styles.navTop}>
            <NavLink href="#" text="Boxes" />
            <NavLink href="#" text="Items" />
            <NavLink href="#" text="About us" />
            <NavLink href="#" text="How it works" />
          </div>
        </nav>

        <div className={styles.contactSection}>
          <h3 className={styles.contactTitle}>Contact us</h3>
          <div className={styles.contactItem}>
            <Email className={styles.icon} />
            <span>mamacareboxes@gmail.org</span>
          </div>
          <div className={styles.contactItem}>
            <Phone className={styles.icon} />
            <span>+0 00 000 00 00</span>
          </div>
          <div className={styles.contactItem}>
            <LocationOn className={styles.icon} />
            <span>
              Apt. 843 6979 Leroy Streets, <br /> West Sofia, MI 73437
            </span>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />
      <div className={styles.footerBottom}>
        <span className={styles.text}>
          © MamaCareBoxes 2025. All rights reserved
        </span>
        <NavLink
          href="#"
          text="Privacy Policy"
          className={styles.linkPrivacy}
        />
      </div>
    </footer>
  );
};

export default Footer;
