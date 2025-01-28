import React from "react";
import MemoApp from "./ReactMemo/MemoApp";
import ExpensiveCalculation from "./ExpensiveCalculation";
import SortedList from "./SortedList";
import { items } from "./utils";
import FilteredList from "./FilteredList";
import ToggleComponent from "./ToggleComponent";
import Determinant from "./Determinant";
import UserProvider from "./CombinedHooks/UserProvider";
import DataTransformation from "./CombinedHooks/DataTransformation";

const UseMemoApp = () => {
  return (
    <div>
      UseMemo
      {/* Ex: React.memo */}
      {/* <MemoApp /> */}
      {/* Ex2: calculateFactorial as an expensive function.  */}
      {/* <ExpensiveCalculation /> */}
      {/* Ex3:  Sorting a list*/}
      {/* <SortedList items={items} /> */}
      {/* Ex4:  Search Filtering items list */}
      {/* <FilteredList items={items} /> */}
      {/* Ex5: TOggle Heavy Component where it will be rendered only on show state change */}
      {/* <ToggleComponent /> */}
      {/* Ex6: Calculating Determinant for 2x2 matrix  */}
      {/* <Determinant /> */}
      {/* Ex7: Memoizing expensive API data transformation along with search filter and using useContext and useReducer  */}
      <UserProvider>
        <DataTransformation />
      </UserProvider>
    </div>
  );
};

export default UseMemoApp;

//React.memo is a higher order component that takes a component
// and returns a memoized version of it.
// It only re-renders the component if the props have changed.
// This can be useful for optimizing performance by avoiding unnecessary re-renders.

//useMemo useMemo is a hook that memoizes the result of a function.
// It accepts a function and an array of dependencies.
// It returns the memoized value of the function,
// which is recalculated only if one of the dependencies has changed.
// This can be useful for optimizing performance by avoiding expensive calculations on every render.
