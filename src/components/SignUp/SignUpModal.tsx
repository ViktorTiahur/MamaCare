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
import EmailVerification from "./EmailVerification";


interface SignUpModalProps {
  isOpen: boolean,
  onClose: () => void,
}

type Values = {
  email: string,
  phone: string,
  password: string,
  confirmPassword: string,
}

type Errors = {
  email: string,
  phone: string,
  password: string,
  confirmPassword: string,
}



const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [activeTab, setActiveTab] = useState<'email' | 'phone'>('email');

  const [showVerify, setShowVerify] = useState(false);

  const [values, setValues] = useState<Values>({
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    });

  const [errors, setErrors] = useState(
    { email: '', 
      phone: '', 
      password: '', 
      confirmPassword: '',
    }
    );

    function validate(values: Values): boolean {
      const newErrors: Errors = {
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      };  
        if (activeTab === 'email') {
          if (values.email.trim() === '') {
          newErrors.email = 'The field must be filled'
        }
        }
        if (activeTab === 'phone') {
          if (values.phone.trim() === '') {
            newErrors.phone = 'The field must be filled'
          }
        }

        if (values.password.trim() === '') {
          newErrors.password = 'The field must be filled'
        }

        if (values.password.trim() !== '' && !/^[A-Za-z0-9_\/+%]+$/.test(values.password)) 
        {
          newErrors.password = 'Only A-Z, a-z, 0-9, _, /, +, % signs allowed';
        } 

        //  пусте confirmPassword  показуємо помилку
        if (values.confirmPassword.trim() === '') {
          newErrors.confirmPassword = 'The field must be filled';
        }

        //  якщо поле НЕ пусте  перевіряємо збіг
        else if (values.password !== values.confirmPassword) {
          newErrors.confirmPassword = 'Passwords are not the same';
        }

          setErrors(newErrors);
          // якщо в newErrors ХОЧ ОДНА помилка  повертаємо = false
          // якщо всі порожні  форма валідна  = true
        return !Object.values(newErrors).some(error => error !== '');
      };

     async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
          const isValid = validate(values);
          if (!isValid) return;

          const bodyReq: any = {password: values.password};
          if (values.email.trim() !== '') bodyReq.email = values.email;
          if (values.phone.trim() !== '') bodyReq.phone = values.phone;

          try {
            const res = await fetch('/auth/register', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(bodyReq)
            })

            if (res.status === 201) {
              console.log('User created')
              return;
            }
            if (res.status === 422) {
              console.log('Invalid validation')
              return;
            }
            if (res.status === 500) {
              console.log('Server error')
            }
            if (res.status === 401) {
              console.log('Unauthorized')
            }
          } catch (error) {
              console.error('Request failed', error)
          }

     }
        async function handleResendEmail() {
          try {
            const res = await fetch("/auth/resend-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: values.email }),
            });

            if (res.ok) {
              console.log("Email resent successfully");
            } else {
              console.log("Resend failed");
            }
          } catch (error) {
            console.error("Error while resending email", error);
          }
        }

        function handleSwitchToPhone() {
          setActiveTab("phone");
          setShowVerify(false); //  повертаємось назад у signup
        }



  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {showVerify ? (
          <EmailVerification 
        email={values.email}
        onResend={handleResendEmail}
        onSwitchToPhone={handleSwitchToPhone}
        onClose={onClose}
         />
        ) : (
          <>
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
          </>
        )}

        {!showVerify && (
          <>
          <form className={styles.form} onSubmit={handleSubmit} noValidate > 
        <AnimatePresence mode="wait">
        {activeTab === "email" && (
          <motion.div
            className={styles.fields}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}>
          <EmailField 
          value={values.email}
          onChange={(val) => setValues({...values, email: val})}
          error={errors.email}
          /> 
          <PasswordField 
            id="password"
            label="Password"

            passwordValue={values.password}
            onPasswordChange={(val) => setValues({...values, password: val})}
            passwordError={errors.password}

            confirmValue={values.confirmPassword}
            onConfirmChange={(val) => setValues({...values, confirmPassword: val})}
            confirmError={errors.confirmPassword}
          />
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
          <PhoneField 
          value={values.phone}
          onChange={(val) => setValues({...values, phone: val})}
          error={errors.phone}
          />
          <PasswordField 
            id="password"
            label="Password"
            passwordValue={values.password}
            onPasswordChange={(val) => setValues({...values, password: val})}
            passwordError={errors.password}
            confirmValue={values.confirmPassword}
            onConfirmChange={(val) => setValues({...values, confirmPassword: val})}
            confirmError={errors.confirmPassword}
          />
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
          </>
        )}
        
      </div>
    </div>
  );
};

export default SignUpModal;
