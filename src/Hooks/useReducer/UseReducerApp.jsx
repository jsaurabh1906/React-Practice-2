import React from "react";
import SimpleCounter from "./SimpleCounter";
import TwoCounters from "./TwoCounters";
import MultipleUseReducers from "./MultipleUseReducers";
import GlobalProvider from "./UseReducerWithUseContext/CounterGlobalState/GlobalProvider";
import GlobalCounter from "./UseReducerWithUseContext/CounterGlobalState/GlobalCounter";
import AuthProvider from "./UseReducerWithUseContext/AuthGlobalState/AuthProvider";
import Dashboard from "./UseReducerWithUseContext/AuthGlobalState/Dashboard";
import DataFetching from "./DataFetching";
import ToDoList from "./ToDoList";
import ShoppingCart from "./ShoppingCart";

const UseReducerApp = () => {
  return (
    <>
      UseReducerApp
      {/* Simple Counter with simple state and actions */}
      {/* <SimpleCounter /> */}
      {/*Two Counters with complex state obj and action o\obj */}
      {/* <TwoCounters /> */}
      {/*  */}
      {/* <MultipleUseReducers /> */}
      {/* Global State management for counter */}
      {/* <GlobalProvider>
        <GlobalCounter />
      </GlobalProvider> */}
      {/* Global State Management - Auth Example */}
      {/* <AuthProvider>
        <Dashboard />
      </AuthProvider> */}
      {/* Data Fetching Using useReducer and UseEffect */}
      {/* <DataFetching /> */}
      {/* ToDo List : ADD and Remove Todo */}
      {/* <ToDoList /> */}
      {/* Add/remove items and calculate total price. */}
      <ShoppingCart />
    </>
  );
};

export default UseReducerApp;
//useReducer Hook is a hook that allows you to manage state in a more complex way than useState
//useReducer is useful when you have a state that is updated based on a series of actions
//

//step1: useReducer(reducerFn, initialState)
// useReducer takes two arguments - reducerFn and initialState

//step2: initialize initialState

//step3: define reducerFn
// reducerFn takes two arguments - state and action
// reducerFn returns the new state based on the action
// reducerFn is a pure function and should not have any side effects

//step4: const [currentState, dispatch] = useReducer(reducerFn, initialState)
//useReducer hooks returns an array with two elements - currentState and dispatch
//currentState is the current state of the reducer
//dispatch is a function that takes an action and dispatches it to the reducer
