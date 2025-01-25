import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext/ThemeContext";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Themed Component</h2>
      <div
        className={`border-2  p-4 rounded-lg transition-all ${
          theme === "light" ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <p>The current theme: {theme}</p>
        <button
          className="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded shadow"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemedComponent;
