import React, { useMemo } from "react";
import { inputStyles, topDivStyles } from "../../tailwindStyles";
import { useState } from "react";

const FilteredList = ({ items }) => {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    console.log("filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div>
      <h2>Filtered List</h2>
      <div className={topDivStyles}>
        <p>
          <span className="font-semibold">Original List: </span>
          {items.join(", ")}
        </p>
        <hr></hr>
        <input
          className={inputStyles}
          type="text"
          placeholder="search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="font-semibold">Filtered Items: </p>
        <ul>
          {filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilteredList;
