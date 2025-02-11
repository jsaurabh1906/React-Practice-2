import React, { useEffect } from "react";
import { topDivStyles } from "../../../tailwindStyles";
import AnimatedDiv from "./AnimatedDiv";

const AnimateParent = () => {
  const divRef = React.useRef(null);

  useEffect(() => {
    if (divRef.current) {
      //  divRef.current.style.transform = "translateX(100px)";
      divRef.current.style.animation = "bounce 0.6s ease-in-out infinite";
    }
  }, []);

  return (
    <div className={topDivStyles}>
      <h2>Animate Child</h2>
      <AnimatedDiv ref={divRef} />
    </div>
  );
};

export default AnimateParent;

//NOte:We use if (divRef.current) inside useEffect to ensure that the referenced DOM element exists
// before performing any operations on it.

//Note: Why is it necessary?
//Note: Refs are initially null
//Note: When a component renders for the first time, useRef initializes divRef.current as null.
//  The actual DOM element is only assigned after the component has mounted.

//Note: Prevents runtime errors
//Note: If we try to modify divRef.current.style while it's still null, React will throw an error.
