import '../styles/Navbar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Navbar() {
    return (
        <div className="Navbar">
            <h2 className={"home-title"}><a href="#home">Attila.dev</a></h2>

            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <FontAwesomeIcon className={"navbar-menu-btn"} icon="fa-solid fa-bars" />

            <div className="mobile-nav closed-menu">
                <div className="mobile-nav-header"><FontAwesomeIcon className={"navbar-menu-btn"} icon="fa-solid fa-x" /></div>
                <div className="mobile-nav-menu">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
