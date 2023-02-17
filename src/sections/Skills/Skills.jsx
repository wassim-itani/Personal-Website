import { motion } from "framer-motion";
import { Heading } from "../../components/ui";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiSass,
  DiReact,
  DiGit,
} from "react-icons/di";
import { section } from "../../js/animation";
import "./Skills.css";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={section}
    >
      <Heading text="Skills" />
      <div className="skills-container">
        <div>
          <p>
            I'm knowledgeable in various front-end technologies such as{" "}
            <span className="notice">
              HTML5, CSS3, JavaScript (ES6+), TypeScript, Sass, tailwind css, React, Vue, Redux, Git, GitLab
            </span>
            , etc. In addition to some back-end technologies like{" "}
            <span className="notice">PHP</span> and{" "}
            <span className="notice">MYSQL</span>.
          </p>
          <p>
            Although I'm not a designer, I have a good sense of aesthetics and
            experience in building{" "}
            <span className="notice">responsive web designs</span>. I put
            special effort into optimizing my code and providing the best user
            experience. I guarantee commitment and cooperation during work on
            any project.
          </p>
        </div>
        <div className="skills-cube-scene">
          <div className="skills-cube">
            <div className="cube-side front">
              <DiHtml5 aria-hidden="true" />
            </div>
            <div className="cube-side back">
              <DiCss3 aria-hidden="true" />
            </div>
            <div className="cube-side left">
              <DiJavascript1 aria-hidden="true" />
            </div>
            <div className="cube-side right">
              <DiSass aria-hidden="true" />
            </div>
            <div className="cube-side top">
              <DiReact aria-hidden="true" />
            </div>
            <div className="cube-side bottom">
              <DiGit aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
