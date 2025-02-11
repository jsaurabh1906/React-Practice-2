import React, { useEffect } from "react";
import { topDivStyles } from "../../../tailwindStyles";
import TooltipInput from "./TooltipInput";

const TooltipParent = () => {
  const inputRef = React.useRef();

  useEffect(() => {
    if (inputRef.current)
      inputRef.current.setAttribute("title", "This is a tooltip");
  }, []);

  return (
    <div className={topDivStyles}>
      <h2>BAsic Tooltip</h2>
      <TooltipInput ref={inputRef} />
    </div>
  );
};

export default TooltipParent;
