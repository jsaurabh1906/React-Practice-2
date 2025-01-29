import React from "react";
import Counter from "./usage/Counter";
import Notification from "./usage/Notification";
import ProfileName from "./usage/ProfileName ";

const UseDocumentTitleApp = () => {
  return (
    <div className="space-y-4">
      <h2>useDocumentTitle Hook</h2>
      {/*Ex1: Document Title as counter value*/}
      {/* <Counter /> */}
      {/* Ex2: Show the number of unread messages in the browser tab.*/}
      {/* <Notification /> */}
      {/* Ex3: Change Title Based on Form Input*/}
      <ProfileName />
    </div>
  );
};

export default UseDocumentTitleApp;
