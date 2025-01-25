import React from "react";
import SimpleCounter from "./SimpleCounter";
import CounterWithPrevState from "./CounterWithPrevState";
import UseStateWithObjects from "./UseStateWithObjects";
import UseStateWithArrays from "./UseStateWithArrays";
import MultiStepForm from "./MultiStepForm";
import TogglePasswordInput from "./TogglePasswordInput";

const UseStateApp = () => {
  return (
    <div>
      {/* Ex1: Simple usage of useState */}
      <SimpleCounter />
      <hr />
      {/* Ex2: The correct way of handling state variable */}
      <CounterWithPrevState />
      <hr />
      {/* Ex3: useState with Arrays */}
      <UseStateWithArrays />
      <hr />
      {/* Ex:4 useState with objects where the state is object */}
      <UseStateWithObjects />
      <hr />
      {/* Ex5: MultiStepForm  */}
      <MultiStepForm />
      <hr />
      {/* Ex6: Toggle PasswordInput show/hide  */}
      <TogglePasswordInput />
    </div>
  );
};

export default UseStateApp;
