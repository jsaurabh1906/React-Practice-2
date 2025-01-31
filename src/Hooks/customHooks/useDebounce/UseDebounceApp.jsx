import React from "react";
import SearchInput from "./usage/SearchInput";

const UseDebounceApp = () => {
  return (
    <div className="space-y-4">
      <h2>useDebounce Hook</h2>
      {/*Ex1: Search Input with debounced api call */}
      <SearchInput />
    </div>
  );
};

export default UseDebounceApp;
