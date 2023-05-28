import './App.css';
import './Scrollbar.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faMapLocationDot, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

library.add(faLinkedin, faGithub, faArrowUpRightFromSquare, faMapLocationDot, faEnvelopeOpenText);

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
