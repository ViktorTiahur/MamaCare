import React from "react";
import styles from "./SignUpModal.module.scss";

const PhoneField = () => {
  return (
    <div className={styles.field}>
      <label htmlFor="phone">Phone number</label>
      <input id="phone" type="tel" />
      <p className={styles.error}></p>
    </div>
  );
};

export default PhoneField;
