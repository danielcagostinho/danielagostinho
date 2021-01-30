import React from "react";

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
    <div className="Projects" id="projects">
      <h2>Featured Work</h2>
      <div className="ProjectsContainer">{projectsDisplay}</div>
      {/* <div className="ArchiveLink">
        <h3>View Archive</h3>
        <img src={archiveIcon} alt="Archive Icon" />
      </div> */}
    </div>
  );
};

export default Projects;
