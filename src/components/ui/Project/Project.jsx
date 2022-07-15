import { motion } from "framer-motion";
import { FaGithubAlt, FaExternalLinkAlt } from "react-icons/fa";
import { projectItem } from "../../../js/animation";

import "./Project.css";
const Project = ({ project }) => {
  return (
    <motion.li
      className="project"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={projectItem}
    >
      <a href={project.demo} target="_blank" rel="noreferrer" className="project-img-link">
        <img src={project.img} alt={project.title} className="project-img" />
      </a>
      <div className="project-content">
        <p className="overline-text">Featured Project</p>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-description">
          <p className="project-text">{project.text}</p>
        </div>
        <ul className="project-tools">
          {project.tools.map((tool, index) => {
            return (
              <li key={index} className="project-tool">
                {tool}
              </li>
            );
          })}
        </ul>
        <ul className="project-links">
          <li>
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="project-link"
              aria-label="Github"
            >
              <FaGithubAlt aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-link"
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </motion.li>
  );
};

export default Project;
