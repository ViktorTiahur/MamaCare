"use client";

import type React from "react";
import { useState } from "react";
import styles from "./FAQPage.module.scss";
import plusIcon from "../../assets/icons/Icons-add-24.svg";
import minusIcon from "../../assets/icons/icon-close-18.svg";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
}

const FAQPage: React.FC = () => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      question: "What are boxes?",
      answer:
        "Our boxes are carefully curated collections of baby products designed for different stages of development and needs.",

      isOpen: false,
    },
    {
      question: "How boxes are being assembled?",
      answer: (
        <>
          <p>
            We assemble our boxes with you in mind. The assembly is done after a
            thorough research. Each year we re-evaluate the content of our
            boxes, consult with doctors, skilled nannies, parents to make it
            convenient and easy to use our boxes.
          </p>
          <p className={styles.faq__links}>
            <a href="#" className={styles.faq__link}>
              Our Researches
            </a>
            <a href="#" className={styles.faq__link}>
              Previous Boxes
            </a>
          </p>
        </>
      ),
      isOpen: false,
    },
    {
      question: "Are your products safe?",
      answer:
        "All our products meet or exceed safety standards. We carefully select each item to ensure it is safe for babies and children.",
      isOpen: false,
    },
    {
      question: "Can I change the content of the boxes?",
      answer:
        "Yes, we offer customization options for our boxes. You can add or remove certain items based on your preferences and needs.",
      isOpen: false,
    },
    {
      question: 'What is "Pick&Buy" page?',
      answer:
        'Our "Pick&Buy" page allows you to purchase individual items from our collection without buying a complete box.',
      isOpen: false,
    },
    {
      question: "Can I buy gifts in your store?",
      answer:
        "Our baby boxes make perfect gifts for new parents. We also offer gift wrapping and personalized messages.",
      isOpen: false,
    },
    {
      question: "I've got other questions!",
      answer:
        "Please contact our customer support team at support@babyboxes.com or call us at +1 (800) 123-4567. We're happy to help!",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false,
      }))
    );
  };

  return (
    <div className={styles.faq}>
      <h1 className={styles.faq__title}>FAQ</h1>
      <div className={styles.faq__container}>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.faq__item} ${
              item.isOpen ? styles["faq__item--open"] : ""
            }`}
          >
            <div
              className={styles.faq__question}
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className={styles.faq__icon}>
                <img src={item.isOpen ? minusIcon : plusIcon} alt="" />
              </span>
            </div>
            {item.isOpen && (
              <div className={styles.faq__answer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
