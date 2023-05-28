import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import About from "./pages/About";
import Projects from "./pages/Projects";

library.add(faLinkedin, faGithub, faArrowUpRightFromSquare);

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
    </div>
  );
}

export default App;
