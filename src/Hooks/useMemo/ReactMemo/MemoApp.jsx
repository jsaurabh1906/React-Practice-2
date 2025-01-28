import React, { useState } from "react";
import ReactMemoComponent from "./ReactMemoComponent";
import { topDivStyles } from "../../../tailwindStyles";

const MemoApp = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>React Memo</h2>
      <div className={topDivStyles}>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        <ReactMemoComponent name="Saurabh" />
      </div>{" "}
    </div>
  );
};

export default MemoApp;

//IN above example, the ReactMemoComponent is rendered only once
// when the MemoApp component is rendered.
// This is because the ReactMemoComponent is wrapped in a
// React.memo() call, which memoizes the component and only
// re-renders it when its props change.
