import { FC } from "react";
import NavLink from "../NavLink/Navlink";
import styles from "./Footer.module.scss";
import face from "../../assets/icons/face.png";
import link from "../../assets/icons/link.png";
import youtube from "../../assets/icons/youtube.png";
import insta from "../../assets/icons/insta.png";
import Button from "../Button/Button";
import mail from "../../assets/icons/mail.svg";
import phone from "../../assets/icons/phone.svg";
import map from "../../assets/icons/map.svg";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* <div className={styles.brandSection}> */}
        <div className={styles.subSection}>
          <h2 className={styles.title}>MamaCare</h2>
          <div className={styles.socialIcons}>
            <Button className={styles.icon}>
              <img src={face} alt="facebook" />
            </Button>
            <Button className={styles.icon}>
              <img src={link} alt="linkedin" />
            </Button>
            <Button className={styles.icon}>
              <img src={youtube} alt="youtube" />
            </Button>
            <Button className={styles.icon}>
              <img src={insta} alt="instagram" />
            </Button>
          </div>
        </div>
        <nav className={styles.nav}>
          <NavLink href="#" text="Boxes" />
          <NavLink href="#" text="Items" />
          <NavLink href="#" text="About us" />
          <NavLink href="#" text="How it works" />
        </nav>
        {/* </div> */}

        <div className={styles.contactSection}>
          <h3 className={styles.contactTitle}>Contact us</h3>
          <Button className={styles.contactItem}>
            <img src={mail} alt="mail" />
            <a href="mailto:">mamacareboxes@gmail.org</a>
          </Button>
          <Button className={styles.contactItem}>
            <img src={phone} alt="phone" />
            <a href="tel:+0 00 000 00 00">+0 00 000 00 00</a>
          </Button>
          <Button className={styles.contactItem}>
            <img src={map} alt="map" />
            <a href="https://maps.app.goo.gl/mwspnZrCT77iaPJU6" target="_blank">
              Apt. 843 6979 Leroy Streets, <br /> West Sofia, MI 73437
            </a>
          </Button>
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
      {/* </div> */}
    </footer>
  );
};

export default Footer;
