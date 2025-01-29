import React, { memo } from "react";

const Count = ({ text, count }) => {
  console.log("Count Component Rendered:", text);

  return (
    <div className="flex flex-col items-center text-lg font-medium">
      <p className="text-gray-700">{text}:</p>
      <p className="text-indigo-600 text-xl font-bold">{count}</p>
    </div>
  );
};

export default memo(Count);
