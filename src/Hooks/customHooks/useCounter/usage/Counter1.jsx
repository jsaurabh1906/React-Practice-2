import React from "react";
import useCounter from "../implementation/useCounter";
import { topDivStyles } from "../../../../tailwindStyles";

const Counter1 = () => {
  const [count, increment, decrement, reset] = useCounter(1, 1);
  return (
    <div className={topDivStyles}>
      <h2>Counter 1</h2>{" "}
      <p>initialValue : 1 and increment decrement value : 1</p>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter1;
