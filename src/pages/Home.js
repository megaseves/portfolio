import '../styles/Home.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Home() {
    return (
        <div className="Home">

            <div className="welcome">
                <div className="greeting">
                    <h1>Full-Stack Developer</h1>
                    <p>Hi, I'm Attila Schmiedt. I like frontend development the most,<br/>but I studied several frontend and backend technologies.</p>
                    <div className="btn-and-socials">
                        <a href="#projects"><button className="projectBtn" role="button">Projects</button></a>
                       <span className="greeting-socials">
                            <a href="https://www.linkedin.com/in/lufy/" target={"_blank"}><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                            <a href="https://github.com/megaseves/" target={"_blank"}><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                       </span>
                    </div>

                </div>
                <div className="hero">
                    <img src="myFace.jpg" alt="hero" className={"hero-img"}/>
                </div>
            </div>

        </div>
    );
}

export default Home;
