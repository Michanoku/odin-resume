import './App.css';
import { Section } from './components/Section.jsx';
import { InfoField } from './components/Info.jsx';
import { Picture } from './components/Picture.jsx';

function App() {
  return (
    <>
    <header>Your CV</header>
    <main className="layout">
        <aside className="sideBar">
            <Picture />
            <Section>
                <InfoField label="Name"></InfoField>
                <InfoField label="Address"></InfoField>
                <InfoField label="Email"></InfoField>
                <InfoField label="Phone"></InfoField>
            </Section>
        </aside>
        <div className="main">

        </div>
    </main>
    <footer></footer>
     </>
  )
}

export default App
