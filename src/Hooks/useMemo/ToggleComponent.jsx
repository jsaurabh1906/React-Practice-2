import React, { useState, useMemo } from "react";

function HeavyComponent() {
  console.log("Heavy component rendered");
  return (
    <div className="flex flex-col items-center justify-center p-8 mt-4 space-y-4 border border-gray-300 rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 animate-pulse text-blue-600">
        Heavy Component
      </h2>
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-spin"></div>
      <p className="text-lg text-gray-700 font-medium animate-bounce">
        I perform heavy calculations...
      </p>
      <div className="w-full h-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded animate-pulse"></div>
    </div>
  );
}

const ToggleComponent = () => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const memoizedHeavyComponent = useMemo(() => {
    console.log("Memoized HeavyComponent recomputed");
    return show ? <HeavyComponent /> : null;
  }, [show]);

  return (
    <div className="border-2 border-custom-blue p-4 my-4">
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"} Heavy Component
      </button>
      {memoizedHeavyComponent}

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count : {count}
      </button>
    </div>
  );
};

export default ToggleComponent;
