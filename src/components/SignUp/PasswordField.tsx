import React, { useState } from "react";
import styles from "./SignUpModal.module.scss";
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface PasswordFieldProps {
  passwordValue: string;
  onPasswordChange: (value: string) => void;
  passwordError?: string;

  confirmValue: string;
  onConfirmChange: (value: string) => void;
  confirmError?: string;

  label: string;
  id: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  id,
  label,
  passwordValue,
  onPasswordChange,
  passwordError,
  confirmValue,
  onConfirmChange,
  confirmError,
}) => {
  // для відображення пароля
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <div className={styles.field}>
        <label htmlFor={id}>{label}</label>
        <div className={styles.inputInner}>
          <input
            id={id}
            type={show ? "text" : "password"}
            value={passwordValue}
            onChange={(e) => onPasswordChange(e.target.value)}
            style={
              passwordError
                ? {
                    outline: "1px solid #A20404",
                    borderColor: "#A20404",
                  }
                : {}
            }
          />

          <button
            type="button"
            aria-label="enter your password"
            className={styles.eyeBtn}
            onClick={() => setShow(!show)} // переключаем стейт
          >
            {/* умовний рендеринг іконки */}
            {show ? (
              <BsEye size={22} color="#000" />
            ) : (
              <BsEyeSlash size={22} color="#000" />
            )}
          </button>
        </div>
        {passwordError && <p className={styles.error}>{passwordError}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="confirmPassword">Confirm password</label>
        <div className={styles.inputInner}>
          <input
            id="confirmPassword"
            type={showConfirm ? "text" : "password"}
            value={confirmValue}
            onChange={(e) => onConfirmChange(e.target.value)}
            style={
              confirmError
                ? {
                    outline: "1px solid #A20404",
                    borderColor: "#A20404",
                  }
                : {}
            }
          />
          <button
            type="button"
            aria-label="confirm password"
            className={styles.eyeBtn}
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? (
              <BsEye size={22} color="#000" />
            ) : (
              <BsEyeSlash size={22} color="#000" />
            )}
          </button>
        </div>
        {confirmError && <p className={styles.error}>{confirmError}</p>}
      </div>
    </>
  );
};

export default PasswordField;
