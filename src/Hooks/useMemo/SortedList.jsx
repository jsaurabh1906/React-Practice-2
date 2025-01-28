import React, { useMemo } from "react";
import { topDivStyles } from "../../tailwindStyles";

const SortedList = ({ items }) => {
  const sortedItems = useMemo(() => {
    console.log("Sorting items...");
    // return items.sort(); // sorts/modifies on original array
    return [...items].sort(); // sorts/modifies on copy of array
  }, [items]); //the function will only run when items changes

  return (
    <div>
      <h2>Sorted List</h2>
      <div className={topDivStyles}>
        <div>
          <p className="font-semibold">Unsorted List</p>
          {/*  {items.map((item) => (
            <p key={item}>{item}</p>
          ))} */}
          <p>{items.join(", ")}</p>
        </div>
        <hr />
        <div>
          <p className="font-semibold">Sorted List</p>
          {sortedItems.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortedList;
