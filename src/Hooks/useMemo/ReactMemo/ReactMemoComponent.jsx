import React, { memo } from "react";

const ReactMemoComponent = memo((props) => {
  console.log("Rendering ReactMemoComponent");
  return <div>{props.name}</div>;
});

export default ReactMemoComponent;
