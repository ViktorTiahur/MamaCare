import { FC } from "react";

import styles from "./Navlink.module.scss";

interface NavLinkProps {
  href: string;
  text: string;
  className?: string;
}

const NavLink: FC<NavLinkProps> = ({ href, text, className }) => {
  return (
    <a href={href} className={`${styles.link} ${className}`}>
      {text}
    </a>
  );
};

export default NavLink;
