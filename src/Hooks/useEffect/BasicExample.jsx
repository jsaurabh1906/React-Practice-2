import React, { useEffect, useState } from "react";

const BasicExample = () => {
  const [count, setCount] = useState(0);

  //This will run after every render - NO Dependencies
  useEffect(() => {
    console.log("useEffect called");
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <h2>Basic Example</h2>
      <button onClick={() => setCount(count + 1)}>Count: {count} </button>
    </div>
  );
};

export default BasicExample;
