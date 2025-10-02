
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

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
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [language, setLanguage] = useState("en");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { wishlist } = useWishlist();
  const { cartItems } = useCart();

  const profileRef = useRef(null);
  const menuRef = useRef(null);

  
  // const isRTL = i18n.language === "ar"

  // const toggleLanguage = () => {
  //   const newLang = i18n.language === "ar" ? "en" : "ar"
  //   i18n.changeLanguage(newLang)
  //   document.dir = newLang === "ar" ? "rtl" : "ltr"
  // }
  
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
    "سيارة كهربائية للأطفال",
    "عطر",
    "لابتوب ASUS FHD للألعاب",
    "كرسي راحة من السلسلة S",
    "طعام كلب جاف للسلالة",
    "هاتف",
    "أحذية كرة القدم",
    "مجموعات النساء",
    "رف كتب صغير",
    "مبرد سائل لوحدة المعالجة المركزية RGB",
    "جاكيت ساتان مبطن",
    "مجموعة منتجات Curology",
    "سماعات",
    "بلاي ستيشن 5",
    "كاميرا CANON EOS DSLR",
    "شاشة ألعاب IPS LCD",
    "جيمباد USB GP11 Shooter",
    "حقيبة سفر Gucci",
    "لوحة مفاتيح سلكية AK-900",
    "جيمباد HAVIT HV-G92",
    "JBL Boombox 2",
    "معطف The North",
  ];

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/products?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      {/* إعلان التخفيض */}
      <div className="grid grid-cols-[9fr_1fr] max-sm:grid-cols-1 max-lg:gap-4 place-items-center px-20 max-sm:px-10 py-5 bg-black">
        <div className="text-[14px] text-white flex gap-2 max-sm:flex-col">
          <h1>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h1>
          <Link to="/products">
            <button className="text-sm font-semibold underline md:text-base whitespace-nowrap">
              Shop Now
            </button>
          </Link>
        </div>
        <div>
          <select
              value={i18n.language}
              onChange={(e) => {
                i18n.changeLanguage(e.target.value);
                localStorage.setItem("lang", e.target.value);
                document.documentElement.dir = e.target.value === "ar" ? "rtl" : "ltr";
              }}
              className="px-2 py-1 text-white bg-black rounded-md"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
          </select>
        </div>
      </div>

      {/* الشريط الرئيسي */}
      
      <div className="sticky top-0 z-10 bg-white border-black/40 border-b-[.5px] w-screen px-6 md:px-10 py-3">
       
        {/* desc */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/src/assets/icon.png" alt="Logo" />
            <h1 className="text-2xl font-bold">Exclusive</h1>
          </Link>

          <nav className="flex items-center justify-center gap-1 text-sm">
            <NavLink to="/" className="mx-3 hover:text-red-600 hover:underline underline-offset-8">الصفجة الرئيسية</NavLink>
            <NavLink to="/products" className="mx-3 hover:text-red-600 hover:underline underline-offset-8">منتجاتنا</NavLink>
            <NavLink to="/contact" className="mx-3 hover:text-red-600 hover:underline underline-offset-8">اتصل بنا</NavLink>
            <NavLink to="/about" className="mx-3 hover:text-red-600 hover:underline underline-offset-8">من نحن</NavLink>
            <NavLink to="/login" className="mx-3 hover:text-red-600 hover:underline underline-offset-8">تسجيل الدخول</NavLink>
            <NavLink to="/SignUp" className="mx-3 hover:text-red-600 hover:underline underline-offset-8">إنشاء حساب</NavLink>
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
                  placeholder="...بحث"
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

            <Link to="/wishlist" className="relative hover:text-red-500">
              <FiHeart size={22} />
              {wishlist.length > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative hover:text-red-500">
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
                    <Link to="/SignUp"><li className="flex items-center gap-2 p-2 hover:text-red-400"><CgLogIn /> إنشاء حساب</li></Link>
                    <Link to="/Login"><li className="flex items-center gap-2 p-2 hover:text-red-400"><CgLogIn /> تسجيل الدخول</li></Link>
                    <li className="flex items-center gap-2 p-2 text-red-500 cursor-pointer"><BiLogOut /> تسجيل الخروج</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* موبايل */}
        <div className="flex items-center justify-between gap-2 md:hidden">
          <button
            data-menu
            className="p-2"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* البحث */}
          <div className="flex-1 max-w-[150px]">
            <Autocomplete
              freeSolo
              options={options}
              inputValue={query}
              onInputChange={(e, value) => setQuery(value)}
              onChange={(e, value) => setQuery(value || "")}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="...بحث"
                  className="rounded-md bg-slate-100"
                />
              )}
            />
          </div>

          <Link to="/wishlist" className="relative hover:text-red-500">
              <FiHeart size={22} />
              {wishlist.length > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative hover:text-red-500">
              <FiShoppingCart size={22} />
              {cartItems.length > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                  {cartItems.length}
                </span>
              )}
            </Link>

          {/* الحساب */}
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
                  <Link to="/SignUp"><li className="flex items-center gap-2 p-2 hover:text-red-400"><CgLogIn /> إنشاء حساب</li></Link>
                  <Link to="/Login"><li className="flex items-center gap-2 p-2 hover:text-red-400"><CgLogIn /> تسجيل الدخول</li></Link>
                  <li className="flex items-center gap-2 p-2 text-red-500 cursor-pointer"><BiLogOut /> تسجيل الخروج</li>
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
>
  <div className="flex flex-col gap-1 px-4 py-4">
    <NavLink className="mx-3 hover:text-red-600 hover:underline underline-offset-8" to="/" onClick={() => setOpenMenu(false)}>الصفحة الرئيسية</NavLink>
    <NavLink className="mx-3 hover:text-red-600 hover:underline underline-offset-8" to="/products" onClick={() => setOpenMenu(false)}>منتجاتنا</NavLink>
    <NavLink className="mx-3 hover:text-red-600 hover:underline underline-offset-8" to="/contact" onClick={() => setOpenMenu(false)}>اتصل بنا</NavLink>
    <NavLink className="mx-3 hover:text-red-600 hover:underline underline-offset-8" to="/about" onClick={() => setOpenMenu(false)}>من نحن</NavLink>
    <NavLink className="mx-3 hover:text-red-600 hover:underline underline-offset-8" to="/account" onClick={() => setOpenMenu(false)}>حسابي</NavLink>
  </div>
</nav>

    </header>
  );
}
