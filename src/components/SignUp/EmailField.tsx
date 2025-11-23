import React from 'react'
import styles from "./SignUpModal.module.scss";


const EmailField = () => {
  return (
    <div className={styles.field}>
      <label htmlFor="email">Email</label>
      <input type="email" name="" id="email" 
      aria-label="enter your e-mail" />
      <p className={styles.error}></p>
    </div>
  )
}

export default EmailField