import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { inputStyles } from "../../../tailwindStyles";

const CustomForm = forwardRef((props, ref) => {
  const inputRef = useRef();
  const emailRef = useRef();
  const [error, setError] = useState("");

  useImperativeHandle(ref, () => ({
    validateForm: () => {
      if (inputRef.current.value === "" || emailRef.current.value === "") {
        setError("Please fill all the fields");
        return false;
      } else {
        setError("");
      }
    },
    resetForm: () => {
      inputRef.current.value = "";
      emailRef.current.value = "";
    },
  }));
  return (
    <div className="flex flex-col gap-2">
      <label className="text-md text-indigo-500 font-bold">
        Name
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your name"
          className={inputStyles}
        />
      </label>
      <label className="text-md text-indigo-500 font-bold">
        Email{" "}
        <input
          ref={emailRef}
          type="text"
          placeholder="Enter your email"
          className={inputStyles}
        />
      </label>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
});

export default CustomForm;
