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
                        <a href="#projects" ><button className="projectBtn" >Projects</button></a>
                       <span className="greeting-socials">
                            <a href="https://www.linkedin.com/in/lufy/" target={"_blank"} rel="noreferrer" ><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                            <a href="https://github.com/megaseves/" target={"_blank"} rel="noreferrer" ><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                       </span>
                    </div>

                </div>
                <div className="hero">
                    <img src="myFace.jpg" alt="hero" className={"hero-img"}/>
                </div>
            </div>
            <div className="tech-stack">
                <p>Tech Stack</p>
                <div className="stacks">
                    <img src="../icons/html.png" alt="html" className={"stack"}/>
                    <img src="../icons/css.png" alt="css" className={"stack"}/>
                    <img src="../icons/js.png" alt="js" className={"stack"}/>
                    <img src="../icons/react.png" alt="react" className={"stack"}/>
                    <img src="../icons/vue.png" alt="vue" className={"stack"}/>
                    <img src="../icons/node.png" alt="node" className={"stack"}/>
                    <img src="../icons/python.png" alt="python" className={"stack"}/>
                    <img src="../icons/java.png" alt="java" className={"stack"}/>
                    <img src="../icons/postgresql.png" alt="postgresql" className={"stack"}/>
                    <img src="../icons/git.png" alt="git" className={"stack"}/>
                    <img src="../icons/heroku.png" alt="heroku" className={"stack"}/>
                    <img src="../icons/firebase.png" alt="firebase" className={"stack"}/>
                </div>
            </div>

        </div>
    );
}

export default Home;
