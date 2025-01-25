import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("english");
  const changeLanguage = (lang) => {
    setCurrentLang(lang);
  };
  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
