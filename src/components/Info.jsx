// This file has the user input field components and their parent components

import "../styles/Info.css";
import { useState} from "react";

// This field is for the general info, like name, phone and email
function InfoField({ label, status }) {
  // The state is used for input and status is used to check if editing or not
  const [input, setInput] = useState("");
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
function BaseField({ type, status }) {
  // The state is used for input and status is used to check if editing or not
  const [input, setInput] = useState();
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
function TextField({ status }) {
  // The status is used to check if editing or not
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
function AcademicField({status}) {
  return (
    <div className="academicField">
      <BaseField type="Start Year - End Year" status={status} />
      <BaseField type="Field of Study" status={status} />
      <BaseField type="Institution" status={status} />
    </div>
  );
}

// The career field component. Contains three basefields and a textfield
function CareerField({status}) {
  return (
    <div className="careerField">
      <BaseField type="Start Year - End Year" status={status} />
      <BaseField type="Position" status={status} />
      <BaseField type="Organization" status={status} />
      <TextField status={status} />
    </div>
  );
}

export { InfoField, AcademicField, CareerField };
