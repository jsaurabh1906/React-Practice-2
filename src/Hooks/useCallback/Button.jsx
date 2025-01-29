import React, { memo } from "react";

const Button = ({ handleClick, text }) => {
  console.log("Button rendered:", text);

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition duration-200"
    >
      {text}
    </button>
  );
};

export default memo(Button);
