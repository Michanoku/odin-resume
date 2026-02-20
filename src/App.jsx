import "./styles/Index.css";
import { Section } from "./components/Section.jsx";
import { Picture } from "./components/Picture.jsx";

function App() {
  // Set initial info field parameters
  const initialInfo = [
    { id: crypto.randomUUID(), label: "Name" },
    { id: crypto.randomUUID(), label: "Email" },
    { id: crypto.randomUUID(), label: "Phone" },
  ];
  return (
    <>
      {/* Header with the title */}
      <header>
        <h1>Your CV</h1>
      </header>
      {/* Main with a grid layout, infopanel to the left and other div right */}
      <main className="layout">
        {/* Info panel with image and general user info input */}
        <div className="infoPanel">
          <Picture />
          <Section type="info" initial={initialInfo} />
        </div>
        {/* Main panel with career and academic input fields */}
        <div>
          <Section type="Career" initial={[{ id: crypto.randomUUID() }]} />
          <Section type="Academic" initial={[{ id: crypto.randomUUID() }]} />
        </div>
      </main>
    </>
  );
}

export default App;
