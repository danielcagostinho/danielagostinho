import React from "react";
import { motion } from "framer-motion";

import reactIcon from "../../assets/icons/ReactIcon.svg";
import html5Icon from "../../assets/icons/HTML5Icon.svg";
import css3Icon from "../../assets/icons/CSS3Icon.svg";
import reduxIcon from "../../assets/icons/ReduxIcon.svg";
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
          <div className="Bio">
            <h3 className="Title">My Skills</h3>
            <p className="Description">
              <span>
                {window.innerWidth < 600 ? "Below " : "To the right "}
              </span>
              are skills that I've picked up through my development journey. Although I use C#, Angular and SQL in my every day work, I prefer to code in React.js! Here is a more extensive list of my skills:
            </p>
            <div className="BioSkillsContainer">
              <p>React.js</p>
              <p>Angular</p>
              <p>C#</p>
              <p>Node.js</p>
              <p>Redux</p>
              <p>HTML5</p>
              <p>CSS5</p>
              <p>SASS</p>
              <p>Figma</p>
              <p>PostgreSQL</p>
            </div>
          </div>
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
            <div className="SmallImage5">
              <img src={nodeIcon} alt="Node Icon" />
            </div>
            <div className="SmallImage6">
              <img src={reduxIcon} alt="Redux Icon" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
