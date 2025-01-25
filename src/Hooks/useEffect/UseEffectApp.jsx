import React from "react";
import BasicExample from "./BasicExample";
import MountOnceExample from "./MountOnceExample";
import DependencyExample1 from "./DependencyExample1";
import Timer from "./Timer";
import MousePosition from "./MousePosition";
import MouseContainer from "./MouseContainer";
import ConditionalEffect from "./ConditionalEffect";
import DataFetching from "./DataFetching";
import DebounceEffect from "./DebounceEffect";
import DebouncedResizeWindowWidth from "./DebouncedResizeWindowWidth";

const UseEffectApp = () => {
  return (
    <>
      {/*Ex1: Basic Example - useEffect with No Dependencies (Runs on Every Render)   */}
      {/* <BasicExample /> <hr /> */}
      {/* Ex2: useEffect with Empty Dependency Array (Runs Only Once on Mount)*/}
      {/* <MountOnceExample /> <hr />*/}
      {/* Ex3: useEffect with Specific Dependencies */}
      {/* <DependencyExample1 /> <hr /> */}

      {/*  Cleanup function - runs before component unmounts or before re-running effect*/}
      {/* Ex4: clean up function in useEffect*/}
      {/* <Timer /> <hr /> */}
      {/* Ex5: Actual Clean Up Example*/}
      {/* <MouseContainer /> <hr />*/}

      {/* Ex6: Conditional Effect */}
      {/* <ConditionalEffect />
      <hr /> */}

      {/* Ex7: Data Fetching with error handling */}
      {/* <DataFetching />
      <hr /> */}

      {/* Ex8: Debounced Effect: on search post with id */}
      <DebounceEffect />

      {/* Ex9: Debounce a window resize event to update the width of the window.   */}
      <DebouncedResizeWindowWidth />

      {/* Ex: Contains diff aspect of useEffect such as
      useEffect with no dependency, useEffect with empty dependency array and clean up function 
     Also used with MouseContainer Example to see the real clean up function activity   */}
      {/* <MousePosition /> */}
    </>
  );
};

export default UseEffectApp;

//Debouncing is a technique used to limit the rate at which a function is executed.
// It’s particularly useful in scenarios like search inputs,
// where you want to wait until the user has stopped typing before making a request.
