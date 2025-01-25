import React from "react";
import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext/LanguageContext";

const translations = {
  english: { welcome: "Welcome", farewell: "Farewell" },
  french: { welcome: "Bienvenue", farewell: "Au revoir" },
  german: { welcome: "Willkommen", farewell: "Auf Wiedersehen" },
  hindi: { welcome: "स्वागत", farewell: "अलविदा" },
  spanish: { welcome: "Bienvenido", farewell: "Adiós" },
  russian: { welcome: "Добро пожаловать", farewell: "До свидания" },
  chinese: { welcome: "欢迎", farewell: "再见" },
  korean: { welcome: "환영", farewell: "안녕" },
};

const LanguageGreetings = () => {
  const { currentLang, changeLanguage } = useContext(LanguageContext);
  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div>
      <h2>Language Greetings</h2>
      <div className="border-2  p-4 rounded-lg">
        <h3>
          The translation of Welcome in {capitalizeFirstLetter(currentLang)} is:
          <span className="p-2 font-semibold">
            {translations[currentLang].welcome}
          </span>
        </h3>
        <hr />
        <h3>
          The translation of Farewell in {capitalizeFirstLetter(currentLang)}{" "}
          is:
          <span className="p-2 font-semibold">
            {translations[currentLang].farewell}
          </span>
        </h3>
        <select
          className="border-2 border-sky-100 rounded-sm mt-4"
          value={currentLang}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          {Object.keys(translations).map((lang) => (
            <option key={lang} value={lang}>
              {capitalizeFirstLetter(lang)}
            </option>
          ))}
        </select>
      </div>

      {/* <button onClick={() => changeLanguage("hindi")}>English</button> */}
    </div>
  );
};

export default LanguageGreetings;
