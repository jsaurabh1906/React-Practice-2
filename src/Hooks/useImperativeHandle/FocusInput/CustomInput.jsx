import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { inputStyles } from "../../../tailwindStyles";

const CustomInput = forwardRef((props, ref) => {
  const iRef = useRef(null);

  //
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      iRef.current.focus();
    },
    clearInput: () => {
      iRef.current.value = "";
    },
  }));

  return (
    <div>
      <label> Child Input Field</label>
      <input
        ref={iRef}
        type="text"
        placeholder="Type here..."
        className={inputStyles}
      />
    </div>
  );
});

export default CustomInput;

//Note: Uses useRef to store a reference to the <input> field.
//Note: Uses useImperativeHandle to expose only two methods: focusInput and clearInput.
//Note: Does not expose the entire input element to the parent.
