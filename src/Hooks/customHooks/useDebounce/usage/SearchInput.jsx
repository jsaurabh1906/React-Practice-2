import React, { useEffect, useState } from "react";
import useDebounce from "../implementation/useDebounce";
import { inputStyles, topDivStyles } from "../../../../tailwindStyles";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Call API to fetch data based on the search term
      console.log("Fetching data for", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className={topDivStyles}>
      <h2>SearchInput With Debounce</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className={inputStyles}
      />
      <p>Searching for : {debouncedSearchTerm}</p>
    </div>
  );
};

export default SearchInput;
