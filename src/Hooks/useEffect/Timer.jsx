import React from "react";

const Timer = () => {
  const [count, setCount] = React.useState(0);

  //useEffect hook to update the count state every second
  React.useEffect(() => {
    console.log("useEffect called: Timer");
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    //clean up function to clear the interval
    // Cleanup function - runs before component unmounts or before re-running effect

    return () => {
      console.log("clearing interval");
      clearInterval(interval);
    };
  }, []); //empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      <h2>Timer</h2>
      <p>{count}</p>
    </div>
  );
};

export default Timer;
