import React, { useState } from "react";

// This is a functional component called SimpleCounter
const SimpleCounter = () => {
  // This is a state variable called count, which is initialized to 0
  // Declare a state variable called count and a function called setCount to update the count
  const [count, setCount] = useState(0);
  // This is the return statement, which renders a button that increments the count when clicked
  return (
    <div>
      <h2>Simple Counter</h2>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
};

export default SimpleCounter;
