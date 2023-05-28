import '../styles/Projects.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Projects() {
    return (
        <div className="Projects" id={"projects"}>
           <div className="projects-content">

                <div className="projects-header">
                    <h4>PORTFOLIO</h4>
                </div>

               <div className="projects">

                    <div className="project-card">
                        <div className="img-card">
                            <img src="../developing.jpg" alt="developing"/>
                        </div>
                        <div className="text-card">
                            <h3>Fast Food 🍔</h3>
                            <p>This is a restaurant website. It is fully responsive. We can use it on any device. I used viewport width and height to create it all.</p>
                            <div className="card-stacks">
                                <span className="project-stack">React</span>
                                <span className="project-stack">Vanila CSS</span>
                            </div>
                            <div className="card-links">
                                <a href={"https://github.com/megaseves/restaurant-react"} target={"_blank"} rel="noreferrer" className="project-code">Code <FontAwesomeIcon icon="fa-brands fa-github" /></a>
                                <a href={"https://github.com/megaseves/restaurant-react"} target={"_blank"} rel="noreferrer" className="project-code">Live Demo <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">

                        <div className="text-card text-card-left">
                            <h3>Fast Food 🍔</h3>
                            <p>This is a restaurant website. It is fully responsive. We can use it on any device. I used viewport width and height to create it all.</p>
                            <div className="card-stacks">
                                <span className="project-stack">React</span>
                                <span className="project-stack">Vanila CSS</span>
                            </div>
                            <div className="card-links">
                                <a href={"https://github.com/megaseves/restaurant-react"} target={"_blank"} rel="noreferrer" className="project-code">Code <FontAwesomeIcon icon="fa-brands fa-github" /></a>
                                <a href={"https://github.com/megaseves/restaurant-react"} target={"_blank"} rel="noreferrer" className="project-code">Live Demo <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></a>
                            </div>
                        </div>
                        <div className="img-card">
                            <img src="../developing.jpg" alt="developing"/>
                        </div>
                    </div>



               </div>

           </div>
        </div>
    );
}

export default Projects;
