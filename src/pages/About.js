import '../styles/About.css';

function About() {
    return (
        <div className="About" id={"about"}>
            <div className="about-content">
                <div className="img-side">
                    <img src="../developing.jpg" alt="developing"/>
                </div>
                <div className="text-side">
                    <h4>ABOUT ME</h4>
                    <h3>I'm a Full-Stack Software Developer, seeking an entry-level opportunity in Fullstack JavaScript, React Development.</h3>
                    <p>I like to work in CSS, I have experience in it. I've
                        been using photoshop for a long time. I like
                        creative things. That's why I'm interested in Front-
                        end, but I'm interested in the backend part too.<br/>
                        I consider myself patient and funny. I am quick to
                        adapt and a maximalist. One
                        of my hobbies is playing music. I have an
                        introverted personality, but I'm not afraid to ask if
                        necessary.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
