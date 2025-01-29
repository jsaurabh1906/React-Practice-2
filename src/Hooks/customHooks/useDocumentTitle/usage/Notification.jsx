import React, { useEffect, useState } from "react";
import { buttonStyles1, topDivStyles } from "../../../../tailwindStyles";
import useDocumentTitle from "../implementation/useDocumentTitle";

const Notification = () => {
  const [messages, setMessages] = useState(0);
  useDocumentTitle(messages > 0 ? `(${messages}) New Messages` : "Inbox");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessages((messages) => messages + 1);
    }, 3000);

    return () => clearTimeout(timeoutId);
  });

  return (
    <div className={topDivStyles}>
      <h2>Notifications</h2>

      <h3>📥 You have {messages} new messages!</h3>
      <button className={buttonStyles1} onClick={() => setMessages(0)}>
        Mark as Read
      </button>
    </div>
  );
};

export default Notification;
