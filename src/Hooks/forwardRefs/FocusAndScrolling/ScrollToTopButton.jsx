import React, { forwardRef } from "react";
import { buttonStyles1 } from "../../../tailwindStyles";

const ScrollToTopButton = forwardRef((props, ref) => {
  return (
    <button ref={ref} onClick={props.onClick} className={`${buttonStyles1}`}>
      Scroll To Top
    </button>
  );
});

export default ScrollToTopButton;
