import React from "react";

import Project from "./Project/Project";
import { motion } from "framer-motion";

import archiveIcon from "../../assets/icons/ArchiveIcon.svg";

import "./Projects.scss";

const Projects = ({ projects, onEnter }) => {
  let projectsDisplay = null;

  projectsDisplay = projects.map((project, idx) => {
    return (
      <Project key={project.name} project={project} flipped={idx % 2 === 1} />
    );
  });

  return (
    <div className="Projects" id="projects">
      <motion.h2
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 2}}
      >Featured Work</motion.h2>
      <div className="ProjectsContainer">{projectsDisplay}</div>
      {/* <div className="ArchiveLink">
        <h3>View Archive</h3>
        <img src={archiveIcon} alt="Archive Icon" />
      </div> */}
    </div>
  );
};

export default Projects;
