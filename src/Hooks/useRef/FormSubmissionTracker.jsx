import React, { useRef, useState } from "react";
import { inputStyles, topDivStyles } from "../../tailwindStyles";

const initialState = {
  name: "",
  email: "",
};

const FormSubmissionTracker = () => {
  const [formData, setFormData] = useState(initialState);
  const prevFormData = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form...");
    console.log("Current form data:", formData);

    prevFormData.current = formData;
    console.log("Previous form data updated to:", prevFormData.current);

    setFormData(initialState);
  };
  return (
    <div>
      <h2>Form Submission Tracker</h2>
      <p>The previous submitted form data alongside the current submission.</p>
      <div className={topDivStyles}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={inputStyles}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={inputStyles}
          />
          <button type="submit">Submit</button>
        </form>

        <hr></hr>

        <h3>Previous Submission</h3>
        {prevFormData.current ? (
          <>
            <p>Name: {prevFormData.current.name}</p>
            <p>Email: {prevFormData.current.email}</p>
          </>
        ) : (
          <>
            <p>No previous submissions found</p>
          </>
        )}
      </div>
    </div>
  );
};

export default FormSubmissionTracker;
