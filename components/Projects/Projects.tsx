'use client';

import { motion } from 'framer-motion';
import Project from './Project';
import { projects } from '@/lib/data';

const Projects = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-20"
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2, staggerChildren: 0.5 }}
    >
      <h2 className="text-secondary font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-16">
        Projects
      </h2>
      <div>
        {projects.map((project, idx) => (
          <Project key={project.name} project={project} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
