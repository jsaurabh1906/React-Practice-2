import React, { useRef } from "react";
import { buttonStyles1, topDivStyles } from "../../../tailwindStyles";
import AnimatedBox from "./AnimatedBox";

const AnimateParent = () => {
  const divRef = useRef(null);

  return (
    <div className={topDivStyles}>
      <h2>Trigger Animation</h2>
      <p className="text-sm">
        The parent triggers an animation on a child component without modifying
        styles directly.
      </p>
      <section className="flex flex-col items-center justify-center">
        <AnimatedBox ref={divRef} />
        <button
          onClick={() => divRef.current.bounce()}
          className={buttonStyles1}
        >
          Bounce Box
        </button>
      </section>
    </div>
  );
};

export default AnimateParent;
