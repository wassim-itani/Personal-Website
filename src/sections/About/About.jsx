import { motion } from "framer-motion";
import { Heading } from "../../components/ui";
import { section } from "../../js/animation";
import { illustration } from "../../assets/images";
import "./About.css";

const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={section}
    >
      <Heading text="About Me" />
      <div className="about-container">
        <div className="about-content">
          <p>
            Hello! My name is Wassim and I enjoy building things for the web. My
            interest in front-end development started in 2021 where I was
            introduced to basic HTML & CSS in my web development course as a CS
            student.
          </p>
          <p>
            Fast-forward to mid 2022, I graduated with a bachelors degree in
            Computer Science from the Lebanese International University with a{" "}
            <span className="notice">3.99 CGPA</span>. Moreover, I honed my
            front-end skills and kept up-to-date by building side-projects,
            watching tutorials, and following online documentations.
          </p>
        </div>
        <img src={illustration} alt="Illustration" className="about-img" />
      </div>
    </motion.section>
  );
};

export default About;
