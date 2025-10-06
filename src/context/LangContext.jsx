import { createContext, useContext, useState } from "react";
import ar from "../i18n/locales/ar.json";
import en from "../i18n/locales/en.json";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("ar");
  const t = lang === "ar" ? ar : en;

  return (
    <LangContext.Provider value={{ t, lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

