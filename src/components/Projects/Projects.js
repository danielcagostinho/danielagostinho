import React from "react";
import { motion } from "framer-motion";

import Project from "./Project/Project";

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
    <motion.div
      className="Projects"
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
    >
      <motion.h2>Featured Work</motion.h2>
      <motion.div className="ProjectsContainer">{projectsDisplay}</motion.div>
      {/* <div className="ArchiveLink">
        <h3>View Archive</h3>
        <img src={archiveIcon} alt="Archive Icon" />
      </div> */}
    </motion.div>
  );
};

export default Projects;
