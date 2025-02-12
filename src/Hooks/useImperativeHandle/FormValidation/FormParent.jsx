import React, { useRef } from "react";
import CustomForm from "./CustomForm";
import { buttonStyles1, topDivStyles } from "../../../tailwindStyles";

const FormParent = () => {
  const formRef = useRef(null);

  const handleClick = () => {
    formRef.current.validateForm();
    formRef.current.resetForm();
  };
  return (
    <div className={topDivStyles}>
      <h2>Custom Form Validation</h2>
      <p className="text-sm">Parent Component will trigger form validation</p>
      <CustomForm ref={formRef} />
      <button className={buttonStyles1} onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default FormParent;
