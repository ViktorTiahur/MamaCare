import React from 'react'
import styles from "./SignUpModal.module.scss";

interface EmailFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}


const EmailField: React.FC<EmailFieldProps> = ({value, onChange, error}) => {
  return (
    <div className={styles.field}>
      <label htmlFor="email">Email</label>
      <input 
      type="email" 
      name="" 
      id="email" 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="enter your e-mail" 
        style={
        error
          ? {
              outline: "1px solid #A20404",
              borderColor: "#A20404"
            }
          : {}
        }
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default EmailField