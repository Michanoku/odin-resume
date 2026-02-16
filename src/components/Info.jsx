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
        <label>
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

export { InfoField }