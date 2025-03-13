import React from "react";
import "./Input.module.scss";
import { FC } from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="custom-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
