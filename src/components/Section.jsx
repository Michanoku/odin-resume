import '../styles/Section.css';
import { useState } from "react";
import { SectionContext } from './SectionContext.jsx';
import { InfoField, AcademicField } from './Info.jsx';

function EditButton({ status, toggleStatus }) {
    return (
        <button className="editButton" onClick={toggleStatus}>
            {status === "edit" ? "Save" : "Edit"}
        </button>
    )
}

function Section({ type, initial }) {
    const [status, setStatus] = useState("edit");
    const [fields, setFields] = useState(initial);
    
    function toggleStatus() {
        const newStatus = status === 'edit' ? 'live' : 'edit';
        setStatus(newStatus);
    }

    function addField() {
        setFields(fields => [
            ...fields,
            { id: crypto.randomUUID() }
        ]);
    }

    let addButton;
    let sectionTitle;
    if (type !== "info") {
        addButton = <button className="addButton" onClick={addField}>+</button>;
        sectionTitle = <div className="sectionTitle">{type}</div>;
    }

    return (
        <SectionContext.Provider value={{ status }}>
            {sectionTitle}
            <section>
                {fields.map(field => {
                    if (type === "info") {
                        return (
                            <InfoField key={field.id} label={field.label}></InfoField>
                        )
                    } else if (type === "Academic") {
                        return (
                            <AcademicField key={field.id}></AcademicField>
                        )
                    } else if (type === "Career") {
                        return (
                            <AcademicField key={field.id}></AcademicField>
                        )
                    } else if (type === "Skills") {
                        return (
                            <AcademicField key={field.id}></AcademicField>
                        )
                    }
                })}
                {addButton}
                <EditButton status={status} toggleStatus={toggleStatus} />
            </section>
        </SectionContext.Provider>
    )
}

export { Section }