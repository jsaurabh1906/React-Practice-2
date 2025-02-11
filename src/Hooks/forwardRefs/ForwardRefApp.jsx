import React from "react";
import FocusInput from "./FocusInput/FocusInput";
import TooltipParent from "./ToolTip/TooltipParent";
import ScrollParent from "./FocusAndScrolling/ScrollParent";
import AnimateParent from "./AnimateDiv/AnimateParent";

const ForwardRefApp = () => {
  return (
    <div className="my-4 space-y-4">
      <h2>forwardRef Examples</h2>
      {/* Ex1. Accessing Child Components DOM Node. */}
      {/* <FocusInput /> */}
      {/*Ex2: Tooltip  */}
      {/* <TooltipParent /> */}
      {/* Ex:3 MAnaging Focus and Scrolling */}
      {/* <ScrollParent /> */}
      {/* Ex4: Animating Child Component */}
      <AnimateParent />
    </div>
  );
};

export default ForwardRefApp;
