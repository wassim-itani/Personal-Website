import { Heading, Project } from "../../components/ui";
import { portfolioHeading } from "../../js/animation";
import {projects} from "../../js/data";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio" >
      <Heading text="Portfolio" variants={portfolioHeading}/>
      <ul className="projects">
        {projects.map((project,index)=>{
          return <Project key={index} project={project}/>
        })}
      </ul>
    </section>
  );
};

export default Portfolio;
