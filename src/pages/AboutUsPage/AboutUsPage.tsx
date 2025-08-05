import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import heart from "@/assets/icons/icon-heart.svg";
import matherPhoto from "@/assets/images/about-desktop.png";
import BabyBoxSection from "@/components/BabyBoxSection/BabyBoxSection";

import styles from "./AboutUsPage.module.scss";

const AboutUsPage = () => {
  const [boxCount, setBoxCount] = useState(3);
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 360) {
        setBoxCount(1);
      } else if (window.innerWidth < 480) {
        setBoxCount(2);
      } else if (window.innerWidth < 695) {
        setBoxCount(4);
      } else {
        setBoxCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUs__container}>
        <h1 className={styles.aboutUs__title}>About Us</h1>

        <section className={styles.aboutUs__section_first}>
          <div className={`${styles.aboutUs__content} ${styles.welcome}`}>
            <div className={styles.aboutUs__heading}>
              <img src={heart} alt="heart" />
              <h2 className={styles.aboutUs__subtitle}>MamaCare Boxes</h2>
            </div>
            <p className={styles.aboutUs__text}>
              Welcome to MamaCare Boxes, your destination for thoughtful and
              delightful gifts for expectant and new mothers!
            </p>
            <p className={styles.aboutUs__text}>
              We understand that pregnancy and early motherhood is full of
              worries, excitement, and fatigue from constant challenges.
            </p>
            <p className={styles.aboutUs__text}>
              That's why we've created a seamless and enjoyable shopping
              experience, designed to bring comfort, support, and a little bit
              of magic right to your doorstep!
            </p>
          </div>

          <div className={`${styles.aboutUs__content} ${styles.our_mission}`}>
            <div className={styles.aboutUs__heading}>
              <img src={heart} alt="heart" />
              <h2 className={styles.aboutUs__subtitle}>Our Mission</h2>
            </div>
            <p className={styles.aboutUs__text}>
              Our mission At MamaCare Boxes is to provide curated gift boxes
              filled with high-quality items, carefully selected to nurture both
              mother and baby. Each box is a celebration, a moment of self-
              care, and a helping hand during this complicated journey.
            </p>
          </div>

          <div className={styles.aboutUs__image}>
            <img
              src={matherPhoto}
              alt="Mother holding baby"
              className={styles.aboutUs__img}
            />
          </div>
        </section>

        <div className={styles.aboutUs__content}>
          <div className={styles.aboutUs__heading}>
            <img src={heart} alt="heart" />
            <h2 className={styles.aboutUs__subtitle}>
              Why Choose MamaCare Boxes?
            </h2>
          </div>
          <p className={styles.aboutUs__text}>
            We provide individual gift boxes that are able to be selected based
            on the stage of pregnancy, or the age of the baby. This allows for a
            very personal gift, that is really useful to the receiver.
          </p>
        </div>

        <section className={styles.aboutUs__section_second}>
          <div className={styles.aboutUs__content}>
            <div className={styles.aboutUs__heading}>
              <img src={heart} alt="heart" />
              <h2 className={styles.aboutUs__subtitle}>
                What's Inside a MamaCare Box?
              </h2>
            </div>
            <div className={styles.aboutUs__boxes}>
              <div className={styles.aboutUs__box}>
                <h3 className={styles.aboutUs__boxTitle}>Bath And Products</h3>
                <p className={styles.aboutUs__boxText}>
                  Indulge in gentle products that pamper and soothe.
                </p>
              </div>
              <div className={styles.aboutUs__box}>
                <h3 className={styles.aboutUs__boxTitle}>
                  Certified Baby Products
                </h3>
                <p className={styles.aboutUs__boxText}>
                  Safe, reliable, and essential items for your little one.
                </p>
              </div>
              <div className={styles.aboutUs__box}>
                <h3 className={styles.aboutUs__boxTitle}>
                  Growth-Stimulating Toys
                </h3>
                <p className={styles.aboutUs__boxText}>
                  Baby development and precious moments of play.
                </p>
              </div>
              <div className={styles.aboutUs__box}>
                <h3 className={styles.aboutUs__boxTitle}>
                  Books And Activities
                </h3>
                <p className={styles.aboutUs__boxText}>
                  Foster your baby learning and bonding.
                </p>
              </div>
              <div className={styles.aboutUs__box}>
                <h3 className={styles.aboutUs__boxTitle}>
                  Apparel And Accessories
                </h3>
                <p className={styles.aboutUs__boxText}>
                  Look and feel great with thoughtfully chosen pieces.
                </p>
              </div>
              <div className={styles.aboutUs__box}>
                <h3 className={styles.aboutUs__boxTitle}>Exciting Surprises</h3>
                <p className={styles.aboutUs__boxText}>
                  Discover new favorites and treats in every box.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.aboutUs__section}>
          <div className={styles.aboutUs__content}>
            <div className={styles.aboutUs__heading}>
              <img src={heart} alt="heart" />
              <h2 className={styles.aboutUs__subtitle}>Join Our Community</h2>
            </div>
            <p className={styles.aboutUs__text}>
              We're more than just a gift service; we're a community of people
              that want to support mothers. We invite you to experience the
              solicitude of MamaCare Boxes.
            </p>
            <p className={styles.aboutUs__text}>
              Thank you for choosing MamaCare Boxes. We're honored to be a part
              of your story.
            </p>
          </div>
        </div>
      </div>

      <BabyBoxSection
        title="We Recommend"
        itemsToShow={boxCount}
        lang={i18n.language as "en" | "uk"}
      />
    </div>
  );
};

export default AboutUsPage;
