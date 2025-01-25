import React from "react";

const CounterWithPrevState = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const incrementBy5 = () => {
    // setCount(count + 5);
    setCount((prevCount) => prevCount + 5);
  };

  const decrementBy5 = () => {
    // setCount(count - 5);
    setCount((prevCount) => prevCount - 5);
  };
  return (
    <div>
      <h2>CounterWithPrevState</h2>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={incrementBy5}>Increment by 5</button>
      <button onClick={decrementBy5}>Decrement by 5</button>
    </div>
  );
};

export default CounterWithPrevState;
