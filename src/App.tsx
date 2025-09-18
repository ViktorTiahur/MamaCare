// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "@/components/Layout/Layout";
import AboutUsPage from "@/pages/AboutUsPage/AboutUsPage";
import BabyBox from "@/pages/BabyBoxPage/BabyBoxPage";
import CartPage from "@/pages/CartPage/CartPage";
import FAQPage from "@/pages/FAQPage/FAQPage";
import HomePage from "@/pages/HomePage/HomePage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import PickAndBuy from "@/pages/PickAndChoosePage/PickAndChoosePage";
import ProductPage from "@/pages/ProductPage/ProductPage";
import ProductReviewsPage from "@/pages/ProductReviews/ProductReviewsPage";
import SignUpPage from "@/pages/SignUpPage/SignUpPage";
// import ProductPage from "./pages/ProductPage/ProductPage";

import GlobalStyle from "./globalStyle";
import "./App.css";

const App: React.FC = () => {

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUpPage />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <CartPage />
            </Layout>
          }
        />
        <Route
          path="/product"
          element={
            <Layout>
              <BabyBox />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <FAQPage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUsPage />
            </Layout>
          }
        />

        <Route
          path="/pickandbuy"
          element={
            <Layout>
              <PickAndBuy />
            </Layout>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <Layout>
              <ProductPage />
            </Layout>
          }
        />
        <Route
          path="/product/:productId/reviews"
          element={<Layout><ProductReviewsPage /></Layout>}
        />
      </Routes>
    </Router>
  );
};

export default App;
