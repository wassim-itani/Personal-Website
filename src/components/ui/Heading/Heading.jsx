import { motion } from "framer-motion";
import "./Heading.css";

const Heading = ({ text, className="", variants }) => {
  return (
    <motion.h2
      className={`numbered-heading ${className}`}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true, amount: 0.8 }}
    >
      {text}
    </motion.h2>
  );
};

export default Heading;
