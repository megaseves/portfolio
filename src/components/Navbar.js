import '../styles/Navbar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const showMobileMenu = () => {
    const mobileMenuDiv = document.querySelector(".mobile-nav");

    if (mobileMenuDiv.classList.contains("closed-menu")) {
        mobileMenuDiv.classList.remove("closed-menu");
    } else {
        mobileMenuDiv.classList.add("closed-menu");
    }
}

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
            <FontAwesomeIcon className={"navbar-menu-btn"} icon="fa-solid fa-bars" onClick={() => showMobileMenu()} />

            <div className="mobile-nav closed-menu">
                <div className="mobile-nav-header"><FontAwesomeIcon className={"navbar-menu-btn"} icon="fa-solid fa-x" onClick={() => showMobileMenu()}/></div>
                <div className="mobile-nav-menu">
                    <a href="#home" onClick={() => showMobileMenu()}>Home</a>
                    <a href="#about" onClick={() => showMobileMenu()}>About</a>
                    <a href="#projects" onClick={() => showMobileMenu()}>Projects</a>
                    <a href="#contact" onClick={() => showMobileMenu()}>Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
