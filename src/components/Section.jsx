// This file contains the section component and all the functionality of it

import "../styles/Section.css";
import { useState, Fragment } from "react";
import { SectionContext } from "./SectionContext.jsx";
import { InfoField, AcademicField, CareerField } from "./Info.jsx";

// This button can start or stop editing mode on each section
function EditButton({ status, toggleStatus }) {
  return (
    <button className="editButton" onClick={toggleStatus}>
      {status === "edit" ? "Save" : "Edit"}
    </button>
  );
}

// This button can add a new input field group when edit is active
function AddButton({ status, add }) {
  if (status === "live") return null;
  return (
    <button className="addButton" onClick={add}>
      +
    </button>
  );
}

// This button can remove an input field group when edit is active
function RemoveButton({ status, remove }) {
  if (status === "live") return null;
  return (
    <button className="removeButton" onClick={remove}>
      Remove
    </button>
  );
}

// For sections that have a title, this is it
function SectionTitle({ title }) {
  return <h2 className="sectionTitle">{title}</h2>;
}

// The section component, containing a variety of fields and functions
function Section({ type, initial }) {
  // The status state sets the section to edit or live
  const [status, setStatus] = useState("edit");
  // The fields state has the data for each field
  const [fields, setFields] = useState(initial);

  // This function can start or stop editing mode on each section
  function toggleStatus() {
    const newStatus = status === "edit" ? "live" : "edit";
    setStatus(newStatus);
  }

  // This function can add a new input field group when edit is active
  function addField() {
    setFields((fields) => [...fields, { id: crypto.randomUUID() }]);
  }

  // This function can remove an input field group when edit is active
  function removeField(id) {
    setFields((fields) => fields.filter((field) => field.id !== id));
  }

  // Map the components to the type requested
  const fieldComponents = {
    info: InfoField,
    Academic: AcademicField,
    Career: CareerField,
  };
  const FieldComponent = fieldComponents[type];

  {/* Depending on section type, two different layouts are needed */}
  return type === "info" ? (
    <SectionContext.Provider value={{ status }}>
      {/* Only one component and button is needed */}
      <section>
        {fields.map((field) => {
          return (
            <Fragment key={field.id}>
              <FieldComponent key={field.id} label={field.label} />
            </Fragment>
          );
        })}
        <div className="sectionButtons">
          <EditButton status={status} toggleStatus={toggleStatus} />
        </div>
      </section>
    </SectionContext.Provider>
  ) : (
    <SectionContext.Provider value={{ status }}>
      {/* Title, component, remove button, add and edit are needed */}
      <section>
        <SectionTitle title={type} />
        {fields.map((field) => {
          return (
            <Fragment key={field.id}>
              <FieldComponent />
              <RemoveButton
                status={status}
                remove={() => removeField(field.id)}
              />
            </Fragment>
          );
        })}
        <div className="sectionButtons">
          <AddButton status={status} add={addField} />
          <EditButton status={status} toggleStatus={toggleStatus} />
        </div>
      </section>
    </SectionContext.Provider>
  );
}

export { Section };
