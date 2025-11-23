import React, { useState } from "react";
import styles from "./SignUpModal.module.scss";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import EmailField from "./EmailField";
import PhoneField from "./PhoneField";
import PasswordField from "./PasswordField";


interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [activeTab, setActiveTab] = useState<'email' | 'phone'>('email');

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
          <button type="button" 
          className={`${styles.tab} ${activeTab === 'email' ? styles.active : ''}`}
          onClick={() => setActiveTab('email')}
          >Email
          </button>
          <button type="button" 
          className={`${styles.tab} ${activeTab === 'phone' ? styles.active : ''}`}
          onClick={() => setActiveTab('phone')}
          >Phone number
          </button>
        </div>

        <form className={styles.form}> 
        <AnimatePresence mode="wait">
        {activeTab === "email" && (
          <motion.div
            className={styles.fields}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}>
          <EmailField/> 
          <PasswordField id="password" label="Password"/>
          </motion.div>
        )}

        {activeTab === 'phone' && (
          <motion.div
            className={styles.fields}
            key="phone"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}>
          <PhoneField/>
          <PasswordField id="password" label="Password"/>
          </motion.div>
        )}
        </AnimatePresence>

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
