import React from "react";
import { motion } from "framer-motion";

import "./AboutSection.scss";

const AboutSection = ({ avatar }) => {
  const titleVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="about-section"
      variants={titleVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ staggerChildren: 2 }}
    >
      <motion.div className="header-section" id="about">
        <motion.div className="header-title" variants={titleVariants}>
          <h1>Daniel Agostinho</h1>
          <h2>Front End Web Developer</h2>
        </motion.div>
        <motion.div className="avatar-container" variants={titleVariants}>
          <img src={avatar} alt="Daniel Agostinho" />
        </motion.div>
      </motion.div>

      <motion.div
        className="bio"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <p>
          Hi, my name’s Daniel and I love building beautiful websites. I’m a web
          developer focusing on <b>front-end dev</b> with some{" "}
          <span>dabbling</span> in design.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
