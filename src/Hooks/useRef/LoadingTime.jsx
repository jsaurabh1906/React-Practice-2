import React, { useRef } from "react";
import { topDivStyles } from "../../tailwindStyles";

const LoadingTime = () => {
  const [count, setCount] = React.useState(0);
  const loadingTimeRef = useRef(new Date().toLocaleTimeString());

  return (
    <div>
      <h2>LoadingTime</h2>
      <p>
        Another example of useRef which keeps a value persistent even when the
        component re-renders due to other state changes.
      </p>
      <div className={topDivStyles}>
        <p>Component loaded at: {loadingTimeRef.current} </p>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
};

export default LoadingTime;
