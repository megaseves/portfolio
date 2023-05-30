import '../styles/Projects.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Projects() {
    return (
        <div className="Projects" id={"projects"}>
           <div className="projects-content">

                <div className="projects-header">
                    <h4 className={"component-title"}>PORTFOLIO</h4>
                    <h2 className={"project-type"}>Front-End Projects</h2>
                </div>

               <div className="projects">


                   <div className="project-card">
                       <div className="img-card">
                           <img src="../project_pictures/audioPlayerDemo.jpg" alt="developing"/>
                       </div>
                       <div className="text-card">
                           <h3>Audio Player 🎧</h3>
                           <p>This is a music player app for my band. We can play the whole album or play a random
                               song. We can look at albums, events and band members.</p>
                           <div className="card-stacks">
                               <span className="project-stack">React</span>
                               <span className="project-stack">Vanila CSS</span>
                           </div>
                           <div className="card-links">
                               <a href={"https://github.com/megaseves/red-pumpkin-reactjs"} target={"_blank"} rel="noreferrer" className="project-code">Code <FontAwesomeIcon icon="fa-brands fa-github" /></a>
                               <a href={"https://redpumpkin.hu/"} target={"_blank"} rel="noreferrer" className="project-code">Website <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></a>
                           </div>
                       </div>
                   </div>


                   <div className="project-card project-card-left">
                       <div className="text-card text-card-left">
                           <h3>Piktor Fiai Bt. 🏗️</h3>
                           <p>I made this website for my friend. They also undertake parquet flooring, room painting and the construction of garden wooden houses in Hungary.</p>
                           <div className="card-stacks">
                               <span className="project-stack">Vue</span>
                               <span className="project-stack">Vanila CSS</span>
                           </div>
                           <div className="card-links">
                               <a href={"https://github.com/megaseves/piktorfiai-vue"} target={"_blank"} rel="noreferrer" className="project-code">Code <FontAwesomeIcon icon="fa-brands fa-github" /></a>
                               <a href={"https://piktorfiai.hu/"} target={"_blank"} rel="noreferrer" className="project-code">Website <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></a>
                           </div>
                       </div>
                       <div className="img-card">
                           <img src="../project_pictures/piktorfiaiDemo.jpg" alt="developing"/>
                       </div>
                   </div>

                    <div className="project-card">
                        <div className="img-card">
                            <img src="../project_pictures/fastFoodDemo.jpg" alt="developing"/>
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
                                <a href={"https://fastfooddemodev.web.app/"} target={"_blank"} rel="noreferrer" className="project-code">Live Demo <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></a>
                            </div>
                        </div>
                    </div>


                   <div className="projects-header">
                       <h2 className={"project-type"}>Full-Stack Projects</h2>
                   </div>


                   <div className="project-card">
                       <div className="img-card">
                           <img src="../project_pictures/socialSiteDemo.jpg" alt="developing"/>
                       </div>
                       <div className="text-card">
                           <h3>Social Site 🌐</h3>
                           <p>It will be a community site. A fully customizable profile can be created for everyone. We can upload pictures and post them on the timeline.</p>
                           <div className="card-stacks">
                               <span className="project-stack">React</span>
                               <span className="project-stack">NodeJS</span>
                           </div>
                           <div className="card-links">
                               <a href={"https://github.com/megaseves/socialSite-NodeJS-ReactJS"} target={"_blank"} rel="noreferrer" className="project-code">Code <FontAwesomeIcon icon="fa-brands fa-github" /></a>
                               <a href={"https://github.com/megaseves/socialSite-NodeJS-ReactJS"} target={"_blank"} rel="noreferrer" className="project-code">Coming soon <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></a>
                           </div>
                       </div>
                   </div>


               </div>

           </div>
        </div>
    );
}

export default Projects;
