import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { loader,letter,polygon } from "../../../js/animation";
import "./Loader.css";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const body = document.body;
    body.classList.add('no-scroll');
    const timer = setTimeout(() => {
      body.classList.remove('no-scroll');
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <motion.svg
            className="loader"
            viewBox="0 0 100 100"
            fill="none"
            stroke="#64FFDA"
            strokeWidth="6"
            strokeLinejoin="round"
            strokeLinecap="round"
            aria-label="Loading Logo"
            initial="hidden"
            animate="visible"
            variants={loader}
          >
            <motion.path
              d="M30 40L40 60L50 50L60 60L70 40"
              variants={letter}
            />
            <motion.path
              d="M9.19873 26.4434L50 2.88675L90.8013 26.4434V73.5566L50 97.1133L9.19873 73.5566V26.4434Z"
              variants={polygon}
            />
          </motion.svg>
        </div>
      ) : null}
    </>
  );
};

export default Loader;
