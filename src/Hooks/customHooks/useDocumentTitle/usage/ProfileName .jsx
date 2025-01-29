import React, { useState } from "react";
import useDocumentTitle from "../implementation/useDocumentTitle";
import { inputStyles, topDivStyles } from "../../../../tailwindStyles";

const ProfileName = () => {
  const [name, setName] = useState("");

  useDocumentTitle(name ? `${name}'s Profile` : "Edit Your Profile");

  return (
    <div className={topDivStyles}>
      <h2>Edit Profile</h2>

      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputStyles}
      />
    </div>
  );
};

export default ProfileName;
