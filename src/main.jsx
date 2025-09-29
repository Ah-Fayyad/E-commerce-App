import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// ✅ Providers
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";

// ✅ Styles
import "./index.css";

// ✅ i18n setup (استدعاء ملف الترجمة)
import "./i18n/i18n";

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