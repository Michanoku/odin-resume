import '../styles/Section.css';
import { useState, Fragment } from "react";
import { SectionContext } from './SectionContext.jsx';
import { InfoField, AcademicField, CareerField } from './Info.jsx';

function EditButton({ status, toggleStatus }) {
    return (
        <button className="editButton" onClick={toggleStatus}>
            {status === "edit" ? "Save" : "Edit"}
        </button>
    )
}

function AddButton({status, add}) {
    if (status === "live") return null;
    return <button className="addButton" onClick={add}>+</button>;
}

function RemoveButton({status, remove}) {
    if (status === "live") return null;
    return <button className="removeButton"  onClick={remove}>Remove</button>
}

function SectionTitle({title}) {
    return <h2 className="sectionTitle">{title}</h2>;
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

    function removeField(id) {
        setFields(fields =>
            fields.filter(field => field.id !== id)
        );
    }

    const fieldComponents = {
        info: InfoField,
        Academic: AcademicField,
        Career: CareerField
    };

    return (
        <SectionContext.Provider value={{ status }}>
            {type !== "info" && (
                <SectionTitle title={type}/>
            )}
            <section>
                {fields.map(field => {
                    const FieldComponent = fieldComponents[type];

                    return type === "info" ? (
                        <FieldComponent key={field.id} label={field.label} />
                    ) : (
                        <Fragment key={field.id}>
                            <FieldComponent />
                            <RemoveButton status={status} remove={() => removeField(field.id)} />
                        </Fragment>
                    );
                })}
                <div className="sectionButtons">
                    {type !== "info" && (
                        <AddButton status={status} add={addField}/>
                    )}
                    <EditButton status={status} toggleStatus={toggleStatus} />
                </div>
            </section>
        </SectionContext.Provider>
    )
}

export { Section }