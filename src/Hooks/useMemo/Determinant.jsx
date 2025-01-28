import React, { useMemo, useState } from "react";
import { topDivStyles } from "../../tailwindStyles";
const matrix = [
  [2, 4],
  [5, 7],
];

const Determinant = () => {
  const [count, setCount] = useState(0);

  const determinant = useMemo(() => {
    console.log("Calculating determinant of a matrix.....");
    const [[a, b], [c, d]] = matrix;
    return a * d - b * c;
  }, [matrix]);

  return (
    <div>
      <h2>Determinant of a Matrix</h2>
      <div className={topDivStyles}>
        <p> Determinant : {determinant}</p>
        <hr />

        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count : {count}
        </button>
      </div>
    </div>
  );
};

export default Determinant;
