import '../styles/Info.css';
import { useState, useContext } from 'react'
import { SectionContext } from "./SectionContext.jsx";

function InfoField({ label }) {
    const [input, setInput] = useState("");
    const { status } = useContext(SectionContext);
    const types = {
        "Name": "text",
        "Address": "text",
        "Phone": "tel",
        "Email": "email",
    }

    return (
        <label className="infoLabel">
            <div>{ label }</div>
            <input
                type={types[label]}
                onChange={(e) => setInput(e.target.value)}
                value={input}
                readOnly={status === "live"}
            >
            </input>
        </label>
    )
}

function BaseField({ type }) {
    const [input, setInput] = useState();
    const { status } = useContext(SectionContext); 
    return (
        <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            readOnly={status === "live"}
            placeholder={type}
        ></input>
    )
}

function AcademicField() {
    return (
        <div className="academicField">
            <BaseField type="Start Year - End Year"/>
            <BaseField type="Field of Study"/>
            <BaseField type="Institution"/>
        </div>
    )
}

function AddButton({ type }) {
    function returnComponent() {
        if (type === "academic") {
            return <AcademicField/>
        } else if (type === "career") {
            return ""
        } else {
            return ""
        }
    }
    return (
        <button onClick={returnComponent}>
            +
        </button>
    )
}
 
export { InfoField, AcademicField, AddButton }