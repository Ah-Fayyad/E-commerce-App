import { useTranslation } from "react-i18next";

export default function useLanguage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ar";

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return { currentLang, toggleLanguage };
}
