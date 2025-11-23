import React, {useState} from 'react'
import styles from "./SignUpModal.module.scss";
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface Props {
  id: string, // щоб інпут мав унікальний ІД
  label: string, // текст заголовка для label
}

const PhoneField: React.FC<Props> = ({id, label}) => {
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
          />

        <button 
        type="button" 
        aria-label="enter your password"
        className={styles.eyeBtn}
        onClick={() => setShow(!show)} // переключаем стейт
        >
          
        {/* умовний рендеринг іконки */}
        {show 
        ? <BsEye size={22} color="#000"/> 
        : <BsEyeSlash size={22} color="#000"/>}
        </button>
      </div>
      <p className={styles.error}></p>
    </div>

    <div className={styles.field}>
      <label htmlFor="confirmPassword">Confirm password</label>
      <div className={styles.inputInner}>
        <input 
        id="confirmPassword"
        type={showConfirm ? "text" : "password"}
         />
        <button 
        type="button"
        aria-label="confirm password"
        className={styles.eyeBtn}
        onClick={() => setShowConfirm(!showConfirm)}
        >
        {showConfirm ? <BsEye size={22} color="#000"/> 
        : <BsEyeSlash size={22} color="#000"/>}
        </button>
      </div>
      <p className={styles.error}></p>
    </div>
    </>
  )
}

export default PhoneField