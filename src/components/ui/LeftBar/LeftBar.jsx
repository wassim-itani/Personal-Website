import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { leftBar } from "../../../js/animation";
import "./LeftBar.css";
const LeftBar = () => {
  return (
    <motion.div className="left-bar" initial="hidden" animate="visible" variants={leftBar}>
      <ul className="socials" >
        <li>
          <a  href="https://github.com/wassim-itani" target="_blank" rel="noreferrer" className="social-link" aria-label="Github">{<FaGithubAlt aria-hidden="true"/>}</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/wassim-itani" target="_blank" rel="noreferrer"  className="social-link" aria-label="Linkedin">{<FaLinkedinIn aria-hidden="true"/>}</a>
        </li>
      </ul>
    </motion.div>
  );
};

export default LeftBar;
