import React, { useCallback, useState } from "react";
import { buttonStyles1, topDivStyles } from "../../tailwindStyles";

const Counter = () => {
  const [count, setCount] = useState(0);

  // On each render, increment would be recreated as a new function.
  // This would cause unnecessary re-renders in child components (if passed as a prop).
  //   const increment = () => {
  //     console.log("incrementing");
  //     setCount((prevCount) => prevCount + 1);
  //   };

  const increment = useCallback(() => {
    console.log("incrementing");
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Counter</h2>
      <div
        className={`${topDivStyles} border border-indigo-500 p-4 rounded-lg space-y-4`}
      >
        <p className="text-gray-700">Count: {count}</p>{" "}
        <button className={buttonStyles1} onClick={increment}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;

//How useCallback is Memoizing
//useCallback stores the function reference in memory.
//Because the dependency array is [], the function is created only once when the component first renders.
//On subsequent renders, React reuses the same function reference instead of creating a new one.
//Without useCallback, a new function would be created every time the component re-renders.
