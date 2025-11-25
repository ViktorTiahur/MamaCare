import React, { ReactNode } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SignUpModal from "../../components/SignUp/SignUpModal"

import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const [isSignUpOpen,setIsSignUpOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <Header openSignUp={() => setIsSignUpOpen(true)} />
      <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
