import "./App.css";
import HeaderText from "./components/HeaderText";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import NavbarWhole from "./components/NavbarWhole";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <main>
        <NavbarWhole />
        <HeaderText />
        <About />
        <Skills />
        <Projects />
        <Resume />
      </main>
    </div>
  );
}

export default App;
