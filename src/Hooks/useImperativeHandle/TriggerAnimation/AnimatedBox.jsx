import React, { forwardRef, useImperativeHandle, useRef } from "react";

const AnimatedBox = forwardRef((props, ref) => {
  const animateBoxRef = useRef(null);
  // This line of code is using the useImperativeHandle hook to create a custom reference for the component.
  // The ref parameter is passed in as an argument, and the second argument is a function that returns an object.
  useImperativeHandle(ref, () => ({
    // This function is defined in the returned object and is used to bounce the box.
    bounce: () => {
      // This line of code sets the animation property of the animateBoxRef to "bounce" for 1 second with an ease-in-out timing function.
      animateBoxRef.current.style.animation = "bounce 1s infinite ease-in-out";
      // This line of code sets a timeout to reset the animation property of the animateBoxRef to an empty string after 5 seconds.
      setTimeout(() => (animateBoxRef.current.style.animation = ""), 5000);
    },
  }));
  return (
    <div
      ref={animateBoxRef}
      className="w-24 h-24 bg-slate-500 rounded-md "
    ></div>
  );
});

export default AnimatedBox;
