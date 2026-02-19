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
            <h2>{ label }</h2>
            <input
                className="userEntry"
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
            className="userEntry"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            readOnly={status === "live"}
            placeholder={type}
        ></input>
    )
}

function TextField() {
    const { status } = useContext(SectionContext); 
    return (
        <textarea
            className="userEntry"
            type="text"
            rows="3"
            style={{ resize: "none", overflow: "hidden" }}
            onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
            }}
            readOnly={status === "live"}
            placeholder="Describe what you did."
        ></textarea>
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

function CareerField() {
    return (
        <div className="careerField">
            <BaseField type="Start Year - End Year"/>
            <BaseField type="Position"/>
            <BaseField type="Organization"/>    
            <TextField />
        </div>
    )
}
 
export { InfoField, AcademicField, CareerField }