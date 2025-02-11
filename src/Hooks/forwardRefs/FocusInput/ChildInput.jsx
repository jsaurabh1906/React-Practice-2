import React, { forwardRef } from "react";
import { inputStyles } from "../../../tailwindStyles";

const ChildInput = forwardRef((props, ref) => {
  return (
    <div>
      <input
        ref={ref}
        type="text"
        placeholder="Click button to see changes"
        className={`${inputStyles} placeholder:text-xs`}
      />
    </div>
  );
});

export default ChildInput;
