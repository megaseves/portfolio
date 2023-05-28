import '../styles/Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className="Footer">
            <div className="footer-content">
                <div className="copyright">Copyright © 2023. All rights are reserved</div>
                <span className="links">
                    <a href="https://www.linkedin.com/in/lufy/" target={"_blank"} rel="noreferrer" ><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                    <a href="https://github.com/megaseves/" target={"_blank"} rel="noreferrer" ><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                </span>
            </div>
        </div>
    );
}

export default Footer;
