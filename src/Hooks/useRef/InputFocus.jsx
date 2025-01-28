import React, { useRef } from "react";
import { inputStyles, topDivStyles } from "../../tailwindStyles";

const InputFocus = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>InputFocus</h2>{" "}
      <div className={topDivStyles}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter the text"
          className={`${inputStyles}`}
        />
        <button onClick={handleFocus}>Focus Input</button>
      </div>
    </div>
  );
};

export default InputFocus;
