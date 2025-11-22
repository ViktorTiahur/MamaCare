import React from "react";
import styles from "./SignUpModal.module.scss";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.btnClose} 
        onClick={onClose}
        aria-label="close sign up modal">
          <IoIosClose size={32} color="#65558F" />
        </button>
        <h3 className={styles.title}>Sign Up</h3>
        <div className={styles.tabs}>
          <button type="button" className={styles.tab}>Email</button>
          <button type="button" className={styles.tab}>Phone number</button>
        </div>

        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="email" 
            aria-label="enter your e-mail" />
            <p className={styles.error}></p>
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputInner}>
              <input type="password" name="" id="password" />
              <button 
              type="button" 
              aria-label="enter your password"
              className={styles.eyeBtn}> <BsEye size={22} color="#000" />
              </button>
            </div>
            <p className={styles.error}></p>
          </div>

          <div className={styles.field}>
            <label htmlFor="confirmPassword">Confirm password</label>
            <div className={styles.inputInner}>
              <input type="password" name="" id="confirmPassword" />
              <button 
              type="button"
              aria-label="confirm password"
              className={styles.eyeBtn}> <BsEye size={22} color="#000" />
              </button>
            </div>
            <p className={styles.error}></p>
          </div>
        <div className={styles.remember}>
          <label htmlFor="remember">
          <input type="checkbox" name="" id="remember" 
          className={styles.checkbox}
          aria-label="remember me checkbox"/>
          <span className={styles.rememberText}>Remember me</span>
          </label>
        </div>
          
          <button type="submit" className={styles.btnSubmit}>
            Confirm
          </button>
        </form>

        <div className={styles.continueBlock}>
          <p>Or continue with</p>
          <div className={styles.socials}>
            <button type="button" className={styles.btnSocial}>
              <FcGoogle size={28}/>
            </button>
            <button type="button" className={styles.btnSocial}>
              <FaFacebook size={28} color="#1877F2"/>
            </button>
            <button type="button" className={styles.btnSocial}>
              <FaApple size={28} color="#000"/>
            </button>
          </div>  
        </div>

        <div className={styles.already}>
          <p>Already have an account?</p> 
          <Link to={'/login'} className={styles.loginLink}>
          Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
