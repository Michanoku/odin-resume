import './styles/Index.css';
import { Section } from './components/Section.jsx';
import { Picture } from './components/Picture.jsx';

function App() {
    const initialInfo = [
        {id: crypto.randomUUID(), label:"Name"}, 
        {id: crypto.randomUUID(), label:"Email"}, 
        {id: crypto.randomUUID(), label:"Phone"}
    ]
  return (
    <>
    <header><h1>Your CV</h1></header>
    <main className="layout">
        <div className="infoPanel">
            <Picture />
            <Section type="info" initial={initialInfo}/>
        </div>
        <div>
            <Section type="Career" initial={[{id: crypto.randomUUID()}]}/>
            <Section type="Academic" initial={[{id: crypto.randomUUID()}]}/>
        </div>
    </main>
    <footer></footer>
     </>
  )
}

export default App
