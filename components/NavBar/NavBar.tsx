'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.3 * window.innerHeight) {
        setShowName(true);
      } else {
        setShowName(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300',
        showName && 'shadow-md'
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="min-w-[200px]">
          <AnimatePresence>
            {showName && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                className="text-xl font-semibold text-secondary"
              >
                Daniel Agostinho
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="flex gap-5">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={navBarVariants}
            transition={{ duration: 1, delay: 1 }}
            className="hover:scale-110 transition-transform duration-200"
          >
            <a
              href="#about"
              onClick={e => scrollToSection(e, 'about')}
              className="text-secondary uppercase text-xs md:text-base lg:text-lg cursor-pointer"
            >
              About
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={navBarVariants}
            transition={{ duration: 1, delay: 1.1 }}
            className="hover:scale-110 transition-transform duration-200"
          >
            <a
              href="#projects"
              onClick={e => scrollToSection(e, 'projects')}
              className="text-secondary uppercase text-xs md:text-base lg:text-lg cursor-pointer"
            >
              Projects
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={navBarVariants}
            transition={{ duration: 1, delay: 1.15 }}
            className="hover:scale-110 transition-transform duration-200"
          >
            <a
              href="#skills"
              onClick={e => scrollToSection(e, 'skills')}
              className="text-secondary uppercase text-xs md:text-base lg:text-lg cursor-pointer"
            >
              Skills
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={navBarVariants}
            transition={{ duration: 1, delay: 1.15 }}
            className="hover:scale-110 transition-transform duration-200"
          >
            <a
              href="#work-history"
              onClick={e => scrollToSection(e, 'work-history')}
              className="text-secondary uppercase text-xs md:text-base lg:text-lg cursor-pointer"
            >
              Work
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={navBarVariants}
            transition={{ duration: 1, delay: 1.2 }}
            className="hover:scale-110 transition-transform duration-200"
          >
            <a
              href="#contact"
              onClick={e => scrollToSection(e, 'contact')}
              className="text-secondary uppercase text-xs md:text-base lg:text-lg cursor-pointer"
            >
              Contact
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={navBarVariants}
            transition={{ duration: 1, delay: 1.25 }}
            className="hover:scale-110 transition-transform duration-200"
          >
            <a
              href="/Resume_DanielAgostinho.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary uppercase text-xs md:text-base lg:text-lg"
            >
              Resume
            </a>
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
