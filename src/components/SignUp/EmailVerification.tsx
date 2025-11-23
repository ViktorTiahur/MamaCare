import React, { useState } from "react";
import styles from "./SignUpModal.module.scss";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

interface Props {
  email?: string;
  onResend: () => void;
  onSwitchToPhone: () => void;
  onClose: () => void;
}

const EmailVerification: React.FC<Props> = ({ email, onClose, onSwitchToPhone, onResend }) => {
  return (
    <>
      <div className={styles.verification}>
        <button className={styles.btnClose} 
        onClick={onClose}
        aria-label="close sign up modal">
          <IoIosClose size={32} color="#65558F" />
        </button>
        <h3 className={styles.title}>Email Verification</h3>
        <div className={styles.content}>
          <h4>We sent an email to <b>{email}.</b> 
          </h4>
          <p>Please, go to your email and click <b>“Confirm”</b></p>
          <div className={styles.resend}>
            <span>Didn't receive an email?</span>
            <div className={styles.btnChoice}>
            <button onClick={onResend}>
              Resend the email
            </button>
            <span>Or</span>
            <button onClick={onSwitchToPhone}>
              Sign up with phone number
            </button>
            </div>
          </div>
        </div>
        <div className={styles.continueBlock}>
          <p>Or continue with</p>
          <div className={styles.socials}>
            <button type="button" className={styles.btnSocial}>
              <FcGoogle size={28} />
            </button>
            <button type="button" className={styles.btnSocial}>
              <FaFacebook size={28} color="#1877F2" />
            </button>
            <button type="button" className={styles.btnSocial}>
              <FaApple size={28} color="#000" />
            </button>
          </div>
        </div>

        <div className={styles.already}>
          <p>Already have an account?</p>
          <Link to={"/login"} className={styles.loginLink}>
            Log In
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmailVerification;
