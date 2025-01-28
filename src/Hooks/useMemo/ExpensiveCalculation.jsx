import React, { useMemo, useState } from "react";
import { inputStyles, topDivStyles } from "../../tailwindStyles";

const ExpensiveCalculation = () => {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  //Dummy Expensive calculation {factorial example}
  const calculateFactorial = (num) => {
    console.log("Calculating factorial");
    if (num <= 1) return 1;
    return num * calculateFactorial(num - 1);
  };
  //without memo
  //   const factorialResult = calculateFactorial(number);

  //with memo
  const factorialResult = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <div className={topDivStyles}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className={inputStyles}
        />
        <p>
          Factorial of {number} is: {factorialResult}
        </p>
        <hr />
        <button onClick={() => setCounter(counter + 1)}>
          Count: {counter}
        </button>
      </div>
    </div>
  );
};

export default ExpensiveCalculation;
