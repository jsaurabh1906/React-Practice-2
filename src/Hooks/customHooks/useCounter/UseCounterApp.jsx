import React from "react";
import Counter1 from "./usage/Counter1";
import Counter2 from "./usage/Counter2";

const UseCounterApp = () => {
  return (
    <div className="space-y-4">
      <h2>useCounter Hook</h2>
      {/*  */}
      <Counter1 />
      <Counter2 />
    </div>
  );
};

export default UseCounterApp;
