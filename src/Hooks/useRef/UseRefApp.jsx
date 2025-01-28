import React from "react";
import InputFocus from "./InputFocus";
import Timer from "./Timer";
import InputPlayerName from "./InputPlayerName";
import LoadingTime from "./LoadingTime";
import FormSubmissionTracker from "./FormSubmissionTracker";

const UseRefApp = () => {
  return (
    <>
      {/* EX1: Accessing a DOM Element like focusing on an input field   */}
      {/* <InputFocus /> */}
      {/* EX2: Storing Mutable Values Without Re-Renders   */}
      {/* <Timer /> */}
      {/* <LoadingTime /> */}
      {/* EX3: Connecting and Accessing HTML elements via Refs */}
      <InputPlayerName />
      {/* EX4:Form Submission Tracking  */}
      <FormSubmissionTracker />

      {/* EX5:  */}
      {/* EX6:  */}
      {/* EX7:  */}
      <div></div>
    </>
  );
};

export default UseRefApp;

//Refs allows us to directly accessand interact with DOM elements/components.
//ex:Access a DOM element to read or modify its properties.
//ex: Store mutable values across renders without triggering a re-render.
//ex: Interact with child components.

//Refs are mutable objects with a current property that holds the reference to the target.

//useRef hook is used to create and manage refs in functional components
//changing refs does not cause a re render. its value persists across renders.

//const ref = useRef(initialValue)
