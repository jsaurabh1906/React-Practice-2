import React, { forwardRef } from "react";
import { inputStyles } from "../../../tailwindStyles";

const TooltipInput = forwardRef((props, ref) => {
  return (
    <div>
      <input
        ref={ref}
        type="text"
        placeholder="Hover over me"
        className={inputStyles}
      />
    </div>
  );
});

export default TooltipInput;
