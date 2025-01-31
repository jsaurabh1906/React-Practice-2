import React from "react";
import UseDocumentTitleApp from "../customHooks/useDocumentTitle/UseDocumentTitleApp";
import UseCounterApp from "./useCounter/UseCounterApp";
import UseFetchApp from "./useFetch/UseFetchApp";
import UseAuthApp from "./useAuth/UseAuthApp";
import UseDebounceApp from "./useDebounce/UseDebounceApp";
const CustomHookApp = () => {
  return (
    <div>
      CustomHookApp
      {/*Ex1: useDocumentTitle custom hook  */}
      {/* <UseDocumentTitleApp /> */}
      {/* Ex2: useCounter */}
      {/* <UseCounterApp /> */}
      {/* Ex3: useFetch Hook */}
      {/* <UseFetchApp /> */}
      {/* EX4: useAuth Hook */}
      {/* <UseAuthApp /> */}
      <UseDebounceApp />
    </div>
  );
};

export default CustomHookApp;
