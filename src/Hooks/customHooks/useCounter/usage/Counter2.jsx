import React from "react";
import useCounter from "../implementation/useCounter";
import { topDivStyles } from "../../../../tailwindStyles";

const Counter2 = () => {
  //useCounter(initialValue, incrementDecrementValue)
  const [count, increment, decrement, reset] = useCounter(10, 2);
  return (
    <div className={topDivStyles}>
      <h2>Counter 2</h2>
      <p>initialValue : 10 and increment decrement value : 2</p>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter2;
