import { motion } from "framer-motion";
import { Button } from "../../components/ui";
import { heroSection, heroSection2, heroItem } from "../../js/animation";
import "./Hero.css";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="visible"
      variants={window.innerWidth > 768 ? heroSection : heroSection2}
    >
      <motion.h1 variants={heroItem}>Hi, my name is</motion.h1>
      <motion.h2 className="big-heading" variants={heroItem} >
        Wassim Itani
      </motion.h2>
      <motion.h3 className="big-heading" variants={heroItem} >
        Front-End Developer
      </motion.h3>
      <motion.p className="hero-text" variants={heroItem} >
        I'm a self-motivated and independent front-end developer who is
        passionate about creating interactive applications and experiences on
        the web using the latest technologies.{" "}
      </motion.p>
      <Button
        path="#portfolio"
        text="Check out my projects!"
        size="lg"
        className="hero-btn"
        variants={heroItem}
      />
    </motion.section>
  );
};

export default Hero;
