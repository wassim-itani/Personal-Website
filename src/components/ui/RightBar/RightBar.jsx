import {motion} from "framer-motion";
import { rightBar } from "../../../js/animation";
import "./RightBar.css";
const RightBar = () => {
  return (
    <motion.div className="right-bar" initial="hidden" animate="visible" variants={rightBar}>
      <a
        href="mailto:wassim.j.itani@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="gmail-link"
      >
        wassim.j.itani@gmail.com
      </a>
    </motion.div>
  );
};

export default RightBar;
