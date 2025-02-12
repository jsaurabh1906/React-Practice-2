import React, { useRef } from "react";
import CustomInput from "./CustomInput";
import {
  buttonStyles1,
  dangerButton,
  topDivStyles,
} from "../../../tailwindStyles";

const INputParent = () => {
  const inputRef = useRef(null);
  // const focusInput = () => {
  //     inputRef
  // }

  return (
    <div className={topDivStyles}>
      <h2>Input : Focus and Clear</h2>
      <p className="text-sm">
        The parent wants to focus or clear an input field, but instead of
        directly modifying the DOM, we expose specific methods via child
        component.
      </p>
      <CustomInput ref={inputRef} />
      <hr />
      <p className="text-sm">
        Parent buttons to control only specific actions like focus and clear,
        instead of directly manipulating the DOM.
      </p>
      <button
        onClick={() => {
          inputRef.current.focusInput();
        }}
        className={buttonStyles1}
      >
        Focus Input
      </button>
      <button
        onClick={() => {
          inputRef.current.clearInput();
        }}
        className={dangerButton}
      >
        Clear Input
      </button>
      <hr />
    </div>
  );
};

export default INputParent;

//Note: Uses useRef to store a reference to the child component.
//Note: Calls focusInput() or clearInput() when a button is clicked.
//Note: Cannot modify the input field directly (e.g., change its placeholder or disable it).

//Info: Why is This Approach Better?
// 👉 Encapsulation – The parent does not directly interact with the input field; it only calls specific functions provided by the child.
// 👉 Prevents Unintended Modifications – The parent cannot accidentally modify other properties of the input (like its type, placeholder, or styles).
// 👉 Future-Proofing – If the child later switches to a different UI library (like Material-UI’s <TextField>), the parent won’t break because it’s only calling focusInput() and clearInput() instead of assuming a native <input> is present.
// 👉 Improved Code Maintenance – The input logic stays inside the child, and the parent only interacts through well-defined methods.
