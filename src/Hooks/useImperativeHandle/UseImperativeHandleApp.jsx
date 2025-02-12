import React from "react";
import INputParent from "./FocusInput/INputParent";
import VideoPlayerParent from "./VideoPlayback/VideoPlayerParent";
import AnimateParent from "./TriggerAnimation/AnimateParent";
import FormParent from "./FormValidation/FormParent";
import ModalParent from "./CustomModal/ModalParent";

const UseImperativeHandleApp = () => {
  return (
    <div className="space-y-4">
      useImperativeHandleApp
      {/* Ex1: Exposing a Focus Method for an INput Field */}
      {/* <INputParent /> */}
      {/* Ex2: Controlling Video Playback  */}
      {/* <VideoPlayerParent /> */}
      {/* Ex3: Triggering a Custom Animation  */}
      <AnimateParent />
      {/* Ex4: Custom Form Validation */}
      <FormParent />
      {/* Ex5: Custom Modal  */}
      <ModalParent />
    </div>
  );
};

export default UseImperativeHandleApp;

//Note: The useImperativeHandle hook in React allows a parent component to control
// the behavior of a child component by exposing specific methods via a forwarded ref.
// This is useful when we want to limit access to only certain functionalities
// instead of exposing the entire DOM or component instance.

//Info: When Should You Use useImperativeHandle?
//👉🏻 When you want to expose only specific functionalities of a child component instead of giving full control.
//👉🏻 When the child component should remain reusable without exposing its internal details.
//👉🏻 When you need to control a child component from the parent without breaking encapsulation.
