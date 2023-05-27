import '../styles/Navbar.css';

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
        </div>
    );
}

export default Navbar;
