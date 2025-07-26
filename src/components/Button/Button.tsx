import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  as?: "button" | "a";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  as = "button",
  className,
  children,
  onClick,
  href,
}) => {
  const Component: React.ElementType = as === "a" ? "a" : "button";

  return (
    <Component
      className={[styles.button, className].filter(Boolean).join(" ")}
      onClick={as === "button" ? onClick : undefined}
      href={as === "a" ? href : undefined}
    >
      {children}
    </Component>
  );
};

export default Button;
