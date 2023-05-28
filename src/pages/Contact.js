import '../styles/Contact.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Contact() {
    return (
        <div className="Contact" id={"contact"}>
            <div className="contact-content">
                <h3 className={"component-title"}>CONTACT</h3>

                <div className="infos">

                    <div className="info">
                        <FontAwesomeIcon className={"icon"} icon="fa-solid fa-map-location-dot" />
                        <span className="info-text">
                            <h4>Location</h4>
                            <p>Budapest, Hungary</p>
                        </span>
                    </div>

                    <div className="info">
                        <FontAwesomeIcon className={"icon"} icon="fa-solid fa-envelope-open-text" />
                        <span className="info-text">
                            <h4>E-mail</h4>
                            <a href={"mailto:megaseves@gmail.com"}>megaseves@gmail.com</a>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;
