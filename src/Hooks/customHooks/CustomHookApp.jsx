import React from "react";
import UseDocumentTitleApp from "../customHooks/useDocumentTitle/UseDocumentTitleApp";
import UseCounterApp from "./useCounter/UseCounterApp";
const CustomHookApp = () => {
  return (
    <div>
      CustomHookApp
      {/*Ex1: useDocumentTitle custom hook  */}
      {/* <UseDocumentTitleApp /> */}
      {/* Ex2: useCounter */}
      <UseCounterApp />
    </div>
  );
};

export default CustomHookApp;
