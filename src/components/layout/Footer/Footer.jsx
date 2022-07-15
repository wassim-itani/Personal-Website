import { FaGithubAlt, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-socials">
        <li>
          <a
            href="https://www.github.com/wassim-itani"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
            aria-label="Github"
          >
            {<FaGithubAlt aria-hidden="true" />}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/wassim-itani"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
            aria-label="Linkedin"
          >
            {<FaLinkedinIn aria-hidden="true"/>}
          </a>
        </li>
        <li>
          <a
            href="mailto:wassim.j.itani@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
            aria-label="Gmail"
          >
            {<FaEnvelope aria-hidden="true" />}
          </a>
        </li>
      </ul>
      <p className="footer-text">Design inspired by Brittany Chiang</p>
      <p className="footer-text">
        Built by Wassim Itani
      </p>
    </footer>
  );
};

export default Footer;
