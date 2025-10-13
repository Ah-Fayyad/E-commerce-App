import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useLanguage from "../hooks/useLanguage";

import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiHeart,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { CgLogIn } from "react-icons/cg";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

export default function Header() {
const [loading, setLoading] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { wishlist } = useWishlist();
  const { cartItems } = useCart();
  const { currentLang, toggleLanguage } = useLanguage();


  const profileRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        !event.target.closest("button[data-profile]")
      ) {
        setOpenProfile(false);
      }
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest("button[data-menu]")
      ) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options = [
    t("options.kidsElectricCar"),
    t("options.perfume"),
    t("options.gamingLaptop"),
    t("options.relaxChair"),
    t("options.dogFood"),
    t("options.phone"),
    t("options.footballShoes"),
    t("options.womenSets"),
    t("options.smallBookshelf"),
    t("options.cpuCooler"),
    t("options.satinJacket"),
    t("options.curologySet"),
    t("options.headphones"),
    t("options.playstation5"),
    t("options.canonCamera"),
    t("options.gamingMonitor"),
    t("options.gamepadGP11"),
    t("options.gucciBag"),
    t("options.keyboardAK900"),
    t("options.gamepadHavit"),
    t("options.jblBoombox"),
    t("options.northCoat"),
  ];

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/products?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      {/*  إعلان التخفيض */}
      <div className="grid grid-cols-[9fr_1fr] max-sm:grid-cols-1 max-lg:gap-4 place-items-center px-20 max-sm:px-10 py-5 bg-black">
        <div className="text-[14px] text-white flex gap-2 max-sm:flex-col">
          <h1>{t("header.sale_text")}</h1>
          <Link to="/Products">
            <button className="font-bold underline text-clip text-sky-700 md:text-center">
              {t("header.shop_now")}
            </button>
          </Link>
        </div>

        {/* 🔽 زر اختيار اللغة */}
        <div>
          <select
            value={i18n.language}
            onChange={(e) => {
              const newLang = e.target.value;
              i18n.changeLanguage(newLang);
              localStorage.setItem("lang", newLang);

              // ✅ تحديد الاتجاه حسب اللغة
              if (newLang === "ar") {
                document.documentElement.setAttribute("dir", "rtl");
              } else {
                document.documentElement.setAttribute("dir", "ltr");
              }

              // ✅ إعادة تحميل الصفحة (اختياري لو عايز تحميل كامل)
              window.location.reload();
            }}
            className="px-2 py-1 text-white transition bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
        </select>
        </div>
      </div>


      {/* الشريط الرئيسي */}
      <div className="sticky top-0 z-10 bg-white border-black/40 border-b-[.5px] w-screen px-6 md:px-10 py-3">
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="../assets/icon.png" alt="Logo" />
            <h1 className="text-2xl font-bold">Exclusive</h1>
          </Link>

          {/* روابط التصفح */}
          <nav className="flex items-center justify-center gap-1 text-sm">
            <NavLink to="/" className="mx-3 hover:text-red-600 hover:underline underline-offset-8">
              {t("NavLink.home")}
            </NavLink>
            <NavLink to="/Products" className="mx-3 hover:text-red-600 hover:underline underline-offset-8">
              {t("NavLink.products")}
            </NavLink>
            <NavLink to="/Contact" className="mx-3 hover:text-red-600 hover:underline underline-offset-8">
               {t("NavLink.contact")}
            </NavLink>
            <NavLink to="/About" className="mx-3 hover:text-red-600 hover:underline underline-offset-8">
               {t("NavLink.about")}
            </NavLink>
            <NavLink to="/Login" className="mx-3 hover:text-red-600 hover:underline underline-offset-8">
               {t("NavLink.login")}
            </NavLink>
            <NavLink to="/SignUp" className="mx-3 hover:text-red-600 hover:underline underline-offset-8">
               {t("NavLink.SignUp")}
            </NavLink>
          </nav>

          <div className="flex items-center justify-end gap-5">
            <Autocomplete
              freeSolo
              options={options}
              inputValue={query}
              onInputChange={(e, value) => setQuery(value)}
              onChange={(e, value) => setQuery(value || "")}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder= {t("common.search")}
                  className="self-start text-right rounded-md bg-slate-100"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {query && (
                          <button onClick={handleSearch}>
                            <FiSearch className="w-5 h-5 hover:text-red-500" />
                          </button>
                        )}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
              className="w-[220px]"
            />

            <Link to="/Wishlist" className="relative hover:text-red-500">
              <FiHeart size={22} />
              {wishlist.length > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link to="/Cart" className="relative hover:text-red-500">
              <FiShoppingCart size={22} />
              {cartItems.length > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* زر الحساب */}
            <div className="relative" ref={profileRef}>
              <button
                data-profile
                onClick={() => setOpenProfile(!openProfile)}
                className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-gradient-to-r from-red-500 to-red-700"
              >
                <FiUser size={20} />
              </button>

              {openProfile && (
                <div className="absolute z-50 w-40 p-2 mt-3 transition-all duration-300 ease-in-out rounded-lg shadow-lg bg-zinc-900 bg-opacity-95 right-1">
                  <ul className="flex flex-col gap-2 text-white">

                  <Link to="/SignUp" onClick={() => setOpenProfile(false)}>
                    <li className="flex items-center gap-2 p-2 hover:text-red-400">
                      <CgLogIn /> {t("NavLink.SignUp")}
                    </li>
                  </Link>

                  <Link to="/Login" onClick={() => setOpenProfile(false)}>
                    <li className="flex items-center gap-2 p-2 hover:text-red-400">
                      <CgLogIn /> {t("NavLink.login")}
                    </li>
                  </Link>

                    <li className="flex items-center gap-2 p-2 text-red-500 cursor-pointer">
                      <BiLogOut /> {t("NavLink.logout")}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between gap-2 md:hidden">
          <button
            data-menu
            className="p-2"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <div className="flex-1 max-w-[150px]">
            <Autocomplete
              freeSolo
              options={options}
              inputValue={query}
              onInputChange={(e, value) => setQuery(value)}
              onChange={(e, value) => setQuery(value || "")}
              renderInput={(params) => (
                <TextField {...params} placeholder={t("common.search")} className="rounded-md bg-slate-100" />
              )}
            />
          </div>

          <Link to="/Wishlist" className="relative hover:text-red-500">
            <FiHeart size={22} />
            {wishlist.length > 0 && (
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link to="/Cart" className="relative hover:text-red-500">
            <FiShoppingCart size={22} />
            {cartItems.length > 0 && (
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                {cartItems.length}
              </span>
            )}
          </Link>

          <div className="relative" ref={profileRef}>
            <button
              data-profile
              onClick={() => setOpenProfile(!openProfile)}
              className="flex items-center justify-center text-white rounded-full w-9 h-9 bg-gradient-to-r from-red-500 to-red-700"
            >
              <FiUser size={18} />
            </button>

            {openProfile && (
              <div className="absolute z-50 w-40 p-2 mt-3 transition-all duration-300 ease-in-out rounded-lg shadow-lg bg-zinc-900 bg-opacity-95 right-1">
                <ul className="flex flex-col gap-2 text-white">

                  <Link to="/SignUp">
                    <li className="flex items-center gap-2 p-2 hover:text-red-400">
                      <CgLogIn />  {t("NavLink.SignUp")}
                    </li>
                  </Link>

                  <Link to="/Login">
                    <li className="flex items-center gap-2 p-2 hover:text-red-400">
                      <CgLogIn />  {t("NavLink.login")}
                    </li>
                  </Link>

                  <li className="flex items-center gap-2 p-2 text-red-500 cursor-pointer">
                    <BiLogOut />  {t("NavLink.logout")}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* قائمة الموبايل */}
      <nav
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
          openMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        ref={menuRef}
       >
        <div className="flex flex-col gap-4 px-4 py-4">
          <NavLink
            className="mx-3 hover:text-red-600 hover:underline underline-offset-8"
            to="/"
            onClick={() => setOpenMenu(false)}
          >
             {t("NavLink.home")}
          </NavLink>
          <NavLink
            className="mx-3 hover:text-red-600 hover:underline underline-offset-8"
            to="/Products"
            onClick={() => setOpenMenu(false)}
          >
            {t("NavLink.products")}
          </NavLink>
          <NavLink
            className="mx-3 hover:text-red-600 hover:underline underline-offset-8"
            to="/Contact"
            onClick={() => setOpenMenu(false)}
          >
            {t("NavLink.contact")}
          </NavLink>
          <NavLink
            className="mx-3 hover:text-red-600 hover:underline underline-offset-8"
            to="/About"
            onClick={() => setOpenMenu(false)}
          >
            {t("NavLink.about")}
          </NavLink>
          <NavLink
            className="mx-3 hover:text-red-600 hover:underline underline-offset-8"
            to="/Account"
            onClick={() => setOpenMenu(false)}
          >
           {t("NavLink.account")}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
