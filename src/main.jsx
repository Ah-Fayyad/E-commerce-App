import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// ✅ Providers
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";

// ✅ Styles
import "./index.css";


document.documentElement.setAttribute("dir", "ltl");
document.documentElement.setAttribute("lang", "en");

//  i18n setup (استدعاء ملف الترجمة)
import "./i18n/i18n";

// تأكيد أن الاتجاه دايمًا RTL
const html = document.documentElement;
html.setAttribute("dir", "ltl");
html.setAttribute("lang", "en");


// 🔹 تحديد اللغة المحفوظة أو الافتراضية
const savedLanguage = localStorage.getItem("lang") || "ar";

// 🔹 تثبيت الاتجاه دايمًا RTL
document.documentElement.dir = "ltl";

// 🔹 ضبط اللغة في i18n عند التشغيل لأول مرة
import i18n from "./i18n/i18n";
i18n.changeLanguage(savedLanguage);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>
);