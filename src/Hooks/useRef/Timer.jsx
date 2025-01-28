import React, { useRef, useState } from "react";
import { topDivStyles } from "../../tailwindStyles";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const handleStart = () => {
    if (!timerRef.current) {
      console.log("Starting timer...");
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          console.log(`Timer incremented: ${prev + 1}`);
          return prev + 1;
        });
      }, 1000);
      console.log(
        "New interval ID assigned to timerRef.current:",
        timerRef.current
      );
    } else {
      console.log(
        "Timer is already running. Current interval ID:",
        timerRef.current
      );
    }
  };

  const handleStop = () => {
    if (timerRef.current) {
      console.log("Pausing timer...");
      console.log("Clearing interval with ID:", timerRef.current);
      clearInterval(timerRef.current);
      timerRef.current = null;
      console.log(
        "timerRef.current after clearing interval:",
        timerRef.current
      );
    } else {
      console.log("Timer is already paused. Nothing to stop.");
    }
  };

  const handleReset = () => {
    console.log("Resetting timer...");
    if (timerRef.current) {
      console.log(
        "Clearing interval with ID (before reset):",
        timerRef.current
      );
      clearInterval(timerRef.current);
      timerRef.current = null;
      console.log(
        "timerRef.current after clearing interval during reset:",
        timerRef.current
      );
    }
    setTimer(0);
    console.log("Timer value reset to 0.");
  };

  return (
    <div>
      <h2>Timer</h2>
      <p>Storing Mutable Values Without Re-Renders</p>
      <br />
      <p>
        Refs can also hold mutable values that persist across renders, like
        timers or counters.
      </p>
      <div className={topDivStyles}>
        <p>Timer: {timer}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
