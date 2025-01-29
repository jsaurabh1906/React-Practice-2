import React, { memo } from "react";

const Title = () => {
  console.log("Title Rendered");

  return (
    <div className="text-center mb-4">
      <h2>Optimizing with useCallback</h2>
      <p className="text-gray-600 text-sm">
        Demonstrating how useCallback helps prevent unnecessary re-renders.
      </p>
    </div>
  );
};

export default memo(Title);
