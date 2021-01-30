import React, { useState } from "react";

import { motion, useAnimation } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./MobileNavBar.scss";

const MobileNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    open: {
      x: 0,
    },
    closed: {
      x: "100%",
    },
  };

  const menuController = useAnimation();

  const buttonClass = `hamburger hamburger--spring${
    menuOpen ? " is-active" : ""
  }`;

  return (
    <div className="mobile-nav">
      <div className="mobile-nav-bar"></div>
      <div
        className="menu-icon"
        onClick={() => {
          setMenuOpen(!menuOpen);
          menuController.start(!menuOpen ? "open" : "closed");
        }}
      >
        <button class={buttonClass} type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <motion.div
        className={`mobile-nav-menu${menuOpen ? " shadow" : ""}`}
        variants={menuVariants}
        initial="closed"
        animate={menuController}
        transition={{ x: { type: "tween" } }}
      >
        <div className="mobile-nav-links-container">
          <AnchorLink
            offset={() => 100}
            href="#about"
            className="mobile-nav-link"
          >
            About
          </AnchorLink>
          <AnchorLink
            offset={() => 100}
            href="#projects"
            className="mobile-nav-link"
          >
            Projects
          </AnchorLink>
          <AnchorLink
            offset={() => 100}
            href="#experience"
            className="mobile-nav-link"
          >
            Experience
          </AnchorLink>
          <AnchorLink
            offset={() => 100}
            href="#contact"
            className="mobile-nav-link"
          >
            Contact
          </AnchorLink>
          <AnchorLink
            offset={() => 100}
            href="#"
            className="mobile-nav-link resume"
          >
            Resume
          </AnchorLink>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNavBar;
