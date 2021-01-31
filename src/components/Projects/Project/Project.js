import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import githubIcon from "../../../assets/icons/GithubIcon.svg";
import externalIcon from "../../../assets/icons/ExternalIcon.svg";

import LanguagePill from '../../LanguagePill/LanguagePill';

import "./Project.scss";

const Project = ({ project, flipped }) => {
  const styleVariants = {
    regular: {
      project: {
        flexDirection: "row",
      },
      description: {
        alignItems: "flex-start",
        textAlign: "left",
        marginLeft: 100,
      },
      span: {
        marginRight: 24,
      },
      link: {
        marginRight: 24,
      },
    },
    flipped: {
      project: {
        flexDirection: "row-reverse",
      },
      description: {
        alignItems: "flex-end",
        textAlign: "right",
        marginRight: 100,
      },
      span: {
        marginLeft: 24,
      },

      link: {
        marginLeft: 24,
      },
    },
  };

  const animationVariants = {
    visible: {
      opacity: 1,
      y: [0, -10, 0],
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [viewed, setViewed] = useState(false);
  useEffect(() => {
    if (inView && !viewed) {
      setViewed(true);
      controls.start("visible");
    }
  }, [controls, inView]);

  let variant = flipped ? "flipped" : "regular";
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={animationVariants}
      animate={controls}
      transition={{ duration: 1 }}
      className="Project"
      style={styleVariants[variant].project}
    >
      <div className="ProjectImage">
        <a href={project.url} target="_blank" rel="noreferrer">
          <img src={project.imgSrc} alt="Project Thumbnail" />
        </a>
      </div>
      <div className="ProjectDescription">
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        <div className="pills">
          {project.tech.map((t, idx) => {
            return <LanguagePill key={idx} color={t.color}>{t.name}</LanguagePill>;
          })}
        </div>
        <div className="ProjectLinks">
          <a href={project.github} target="_blank" rel="noreferrer">
            <img
              src={githubIcon}
              alt="Go to page"
            />
          </a>
          <a href={project.url} target="_blank" rel="noreferrer">
            <img
              src={externalIcon}
              alt="Github icon"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
