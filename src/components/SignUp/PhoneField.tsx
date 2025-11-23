import React from "react";
import styles from "./SignUpModal.module.scss";

interface PhoneFieldsProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const PhoneField: React.FC<PhoneFieldsProps> = ({ value, onChange, error }) => {
  return (
    <div className={styles.field}>
      <label htmlFor="phone">Phone number</label>
      <input
        id="phone"
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={
          error
            ? {
                outline: "1px solid #A20404",
                borderColor: "#A20404",
              }
            : {}
        }
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default PhoneField;
