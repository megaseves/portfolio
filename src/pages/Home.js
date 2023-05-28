import '../styles/Home.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Home() {
    return (
        <div className="Home" id={"home"}>

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
                    <div className="myFace"></div>
                </div>
            </div>
            <div className="tech-stack">
                <p>Tech Stack</p>
                <div className="stacks">
                    <span className="first-stacks">
                        <img src="../icons/html.png" alt="html" title="HTML5" className={"stack"}/>
                        <img src="../icons/css.png" alt="css" title="CSS3" className={"stack"}/>
                        <img src="../icons/js.png" alt="js" title="Javascript" className={"stack"}/>
                        <img src="../icons/react.png" alt="react" title="ReactJS" className={"stack"}/>
                        <img src="../icons/vue.png" alt="vue" title="VueJS" className={"stack"}/>
                        <img src="../icons/node.png" alt="node" title="NodeJS" className={"stack"}/>
                    </span>
                    <span className="second-stacks">
                        <img src="../icons/python.png" alt="python" title="Python" className={"stack"}/>
                        <img src="../icons/java.png" alt="java" title="Java" className={"stack"}/>
                        <img src="../icons/postgresql.png" alt="postgresql" title="PostgreSQL" className={"stack"}/>
                        <img src="../icons/git.png" alt="git" title="Git" className={"stack"}/>
                        <img src="../icons/heroku.png" alt="heroku" title="Heroku" className={"stack"}/>
                        <img src="../icons/firebase.png" alt="firebase" title="Firebase" className={"stack"}/>
                    </span>
                </div>
            </div>

        </div>
    );
}

export default Home;
