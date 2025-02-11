import React, { forwardRef } from "react";

const AnimatedDiv = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-24 h-24 bg-blue-500 ">
      AnimatedDiv
    </div>
  );
});

export default AnimatedDiv;
