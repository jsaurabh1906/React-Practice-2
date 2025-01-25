import React, { useState, useEffect } from "react";

const ConditionalEffect = () => {
  // Declare state variables
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);

  // useEffect hook to run when isActive changes
  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval); // cleanup function
  }, [isActive]); // Effect will run when isActive changes

  return (
    <div>
      <h2>ConditionalEffect</h2>
      <div>
        <h3>Time: {timer}</h3>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default ConditionalEffect;
