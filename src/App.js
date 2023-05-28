import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import About from "./pages/About";

library.add(faLinkedin, faGithub);

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
    </div>
  );
}

export default App;
