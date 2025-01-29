import React, { useState } from "react";
import { buttonStyles1, topDivStyles } from "../../../../tailwindStyles";
import useDocumentTitle from "../implementation/useDocumentTitle";
const Counter = () => {
  const [count, setCount] = useState(0);
  useDocumentTitle(`Counter: ${count}`);
  return (
    <div className={topDivStyles}>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button className={buttonStyles1} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
