import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./NavBar.scss";

const NavBar = ({ showName }) => {
  const navBarVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="NavWrapper">
      <div className="NavBar">
        <div className="NameHeader">
          <AnimatePresence>
            {showName && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              >
                Daniel Agostinho
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className="NavLinks">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={navBarVariants}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="NavLinkWrapper">
              <AnchorLink offset={() => 100} href="#about" className="NavLink">
                About
              </AnchorLink>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={navBarVariants}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <div className="NavLinkWrapper">
              <AnchorLink
                offset={() => 100}
                href="#projects"
                className="NavLink"
              >
                Projects
              </AnchorLink>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={navBarVariants}
            transition={{ duration: 1, delay: 1.15 }}
          >
            <div className="NavLinkWrapper">
              <AnchorLink
                offset={() => 100}
                href="#experience"
                className="NavLink"
              >
                Experience
              </AnchorLink>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={navBarVariants}
            transition={{ duration: 1, delay: 1.15 }}
          >
            <div className="NavLinkWrapper">
              <AnchorLink
                offset={() => 100}
                href="#contact"
                className="NavLink"
              >
                Contact
              </AnchorLink>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={navBarVariants}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="NavLinkWrapper">
              <a
                href="./Resume_DanielAgostinho.pdf"
                className="NavLink"
                target="_blank"
                id="ResumeLink"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
