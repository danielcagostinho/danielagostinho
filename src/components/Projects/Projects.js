import React from "react";
import { motion } from "framer-motion";

import Project from "./Project/Project";

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
      className="Projects content"
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2, staggerChildren: 0.5}}
    >
      <motion.h3>Featured Work</motion.h3>
      <motion.div className="ProjectsContainer">{projectsDisplay}</motion.div>
    </motion.div>
  );
};

export default Projects;
