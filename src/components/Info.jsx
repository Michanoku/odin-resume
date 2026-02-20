// This file has the user input field components and their parent components

import "../styles/Info.css";
import { useState, useContext } from "react";
import { SectionContext } from "./SectionContext.jsx";

// This field is for the general info, like name, phone and email
function InfoField({ label }) {
  // The state is used for input and status is used to check if editing or not
  const [input, setInput] = useState("");
  const { status } = useContext(SectionContext);
  const types = {
    Name: "text",
    Phone: "tel",
    Email: "email",
  };

  return (
    <label className="infoLabel">
      <h2>{label}</h2>
      <input
        className="userEntry"
        type={types[label]}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        readOnly={status === "live"}
      ></input>
    </label>
  );
}

// This is the base field used in academic or career components
function BaseField({ type }) {
  // The state is used for input and status is used to check if editing or not
  const [input, setInput] = useState();
  const { status } = useContext(SectionContext);
  return (
    <input
      className="userEntry"
      type="text"
      onChange={(e) => setInput(e.target.value)}
      value={input}
      readOnly={status === "live"}
      placeholder={type}
    ></input>
  );
}

// This field is used for larger text input about job descriptions
function TextField() {
  // The status is used to check if editing or not
  const { status } = useContext(SectionContext);
  return (
    <textarea
      className="userEntry"
      type="text"
      rows="3"
      // Don't allow user resizing or overflow
      style={{ resize: "none", overflow: "hidden" }}
      // This will enlarge the input area when needed
      onInput={(e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
      }}
      readOnly={status === "live"}
      placeholder="Describe what you did."
    ></textarea>
  );
}

// The academic field component. Contains three basefields
function AcademicField() {
  return (
    <div className="academicField">
      <BaseField type="Start Year - End Year" />
      <BaseField type="Field of Study" />
      <BaseField type="Institution" />
    </div>
  );
}

// The career field component. Contains three basefields and a textfield
function CareerField() {
  return (
    <div className="careerField">
      <BaseField type="Start Year - End Year" />
      <BaseField type="Position" />
      <BaseField type="Organization" />
      <TextField />
    </div>
  );
}

export { InfoField, AcademicField, CareerField };
