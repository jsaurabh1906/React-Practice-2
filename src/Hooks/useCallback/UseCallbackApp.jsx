import React from "react";
import Counter from "./Counter";
import ParentComponent from "./ParentComponent";

const UseCallbackApp = () => {
  return (
    <div>
      UseCallbackApp
      {/* Ex1: Basic Example - usage of useCallback to memoize an Event handler */}
      <Counter />
      {/* Ex2: Preventing Unnecessary Child Re-renders */}
      <ParentComponent />
    </div>
  );
};

export default UseCallbackApp;

//useCallback is a hook that returns a memoized callback function,
// that only changes if one of the dependencies has changed.

//It is useful when passing callbacks to optimized child components
// that rely on reference equality to prevent unnecessary re-renders.
