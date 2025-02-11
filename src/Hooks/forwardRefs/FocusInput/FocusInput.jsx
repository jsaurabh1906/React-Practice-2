import React from "react";
import ChildInput from "./ChildInput";
import { buttonStyles1, topDivStyles } from "../../../tailwindStyles";

const FocusInput = () => {
  const inputRef = React.useRef(null);

  const modifyInput = () => {
    inputRef.current.focus();
    inputRef.current.value = "Hello World";
    inputRef.current.style.backgroundColor = "#f2e3d4";
  };

  return (
    <div className={topDivStyles}>
      <h2>Modify Child Input via ref and forwardRef</h2>
      <ChildInput ref={inputRef} />
      <button onClick={modifyInput} className={buttonStyles1}>
        Modify Input
      </button>
    </div>
  );
};

export default FocusInput;
