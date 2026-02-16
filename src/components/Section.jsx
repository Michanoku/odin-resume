import { useState } from "react";
import { SectionContext } from './SectionContext.jsx';

function EditButton({ status, toggleStatus }) {
    return (
        <button onClick={toggleStatus}>
            {status === "edit" ? "Save" : "Edit"}
        </button>
    )
}

function Section({ children }) {
    const [status, setStatus] = useState("edit");
    
    function toggleStatus() {
        const newStatus = status === 'edit' ? 'live' : 'edit';
        setStatus(newStatus);
    };

    return (
        <SectionContext.Provider value={{ status }}>
        <div className="section">
            {children}
            <EditButton status={status} toggleStatus={toggleStatus} />
        </div>
        </SectionContext.Provider>
    )
}

export { Section }