import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useTranslation } from "react-i18next";


// ✅ الصفحات
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import Error404 from "./pages/Error404";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  //  شاشة التحميل أول ما الموقع يفتح
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  //  شريط التحميل عند تغيير الصفحات
  useEffect(() => {
    NProgress.start();
    setTimeout(() => NProgress.done(), 500);
  }, [location]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-16 h-16 border-4 border-red-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}