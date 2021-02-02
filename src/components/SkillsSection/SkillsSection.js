import React from "react";
import { motion } from "framer-motion";

import reactIcon from "../../assets/icons/ReactIcon.svg";
import html5Icon from "../../assets/icons/HTML5Icon.svg";
import css3Icon from "../../assets/icons/CSS3Icon.svg";
import jQueryIcon from "../../assets/icons/jQueryIcon.svg";
import nodeIcon from "../../assets/icons/NodeIcon.png";
import sassIcon from "../../assets/icons/SassIcon.svg";
import figmaIcon from "../../assets/icons/FigmaIcon.png";

import "./SkillsSection.scss";

const SkillsSection = () => {
  const bubbleVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div className="SkillsSection" id="skills">
      <div className="Container content">
        <div className="Column">
          <h3 className="Title">My Skills</h3>
        </div>
        <motion.div
          className="Column"
          variants={bubbleVariants}
          animate={"visible"}
          initial={"hidden"}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="MainImageContainer">
            <img src={reactIcon} alt="React.js logo" className="MainImage" />
          </div>
          <div className="SmallImageContainer">
            <img src={html5Icon} alt="HTML5 Icon" className="SmallImage1" />
            <img src={css3Icon} alt="CSS3 Icon" className="SmallImage2" />
            <img src={sassIcon} alt="Sass Icon" className="SmallImage3" />
            <img src={figmaIcon} alt="Figma Icon" className="SmallImage4" />
            <img src={nodeIcon} alt="Node Icon" className="SmallImage5" />
            <img src={jQueryIcon} alt="jQuery Icon" className="SmallImage6" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
