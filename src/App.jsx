import './App.css';
import { Section } from './components/Section.jsx';
import { InfoField } from './components/Info.jsx';
import { Picture } from './components/Picture.jsx';

function App() {
    const initialInfo = [
        {id: crypto.randomUUID(), label:"Name"}, 
        {id: crypto.randomUUID(), label:"Email"}, 
        {id: crypto.randomUUID(), label:"Phone"}
    ]
  return (
    <>
    <header>Your CV</header>
    <main className="layout">
        <div>
            <Picture />
            <Section type="info" initial={initialInfo}/>
        </div>
        <div>
            <Section type="Career" initial={[{id: crypto.randomUUID()}]}/>
            <Section type="Academic" initial={[{id: crypto.randomUUID()}]}/>
            <Section type="Skills" initial={[{id: crypto.randomUUID()}]}/>
        </div>
    </main>
    <footer></footer>
     </>
  )
}

export default App
