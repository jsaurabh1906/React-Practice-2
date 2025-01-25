import React from "react";
import MousePosition from "./MousePosition";

const MouseContainer = () => {
  const [display, setDisplay] = React.useState(true);
  return (
    <div>
      <h2>MouseContainer</h2>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <MousePosition />}
    </div>
  );
};

export default MouseContainer;
