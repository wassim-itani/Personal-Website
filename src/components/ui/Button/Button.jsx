import { motion } from "framer-motion";
import "./Button.css";
const Button = ({ path, text, external, size, className = "", variants }) => {
  const ext = external ? { target: "_blank", rel: "noreferrer" } : null;
  return (
    <motion.a
      href={path}
      {...ext}
      className={`btn btn-${size} ${className}`}
      variants={variants}
    >
      {text}
    </motion.a>
  );
};

export default Button;
