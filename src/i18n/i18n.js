import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

// 🔹 نجيب اللغة المحفوظة أو نخلي الافتراضي "ar"
const savedLang = localStorage.getItem("lang") || "ar";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang, // ← اللغة المختارة أو الافتراضية
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false, // ← يسمح بعرض HTML بدون مشاكل
  },
});
document.documentElement.setAttribute("dir", "rtl");
document.documentElement.setAttribute("lang", "ar");

export default i18n;
