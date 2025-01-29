import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";
import { topDivStyles } from "../../tailwindStyles";

const ParentComponent = () => {
  console.log("ParentComponent Rendered");
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(10000);

  const incrementAge = useCallback(() => {
    setAge((prev) => prev + 1);
  }, []);

  const incrementSalary = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, []);

  return (
    <>
      <Title />
      <div className={`${topDivStyles} `}>
        {/* Age Section */}
        <div className="flex justify-between items-center p-3 bg-white rounded-md shadow">
          <Count text="Age" count={age} />
          <Button handleClick={incrementAge} text="Increment Age" />
        </div>

        <hr className="border-gray-300" />

        {/* Salary Section */}
        <div className="flex justify-between items-center p-3 bg-white rounded-md shadow">
          <Count text="Salary" count={salary} />
          <Button handleClick={incrementSalary} text="Increment Salary" />
        </div>
      </div>
    </>
  );
};

export default ParentComponent;
//A new handleClick function is created every time the ParentComponent renders,
// which can lead to unnecessary re-renders of child components that use the handleClick function as a prop.

//To avoid this, we can use the useCallback hook to memoize the handleClick functions
//  so that they only update when their dependencies change.
