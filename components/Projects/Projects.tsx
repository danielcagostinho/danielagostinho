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
      <div>
        {projects.map((project, idx) => (
          <Project key={project.name} project={project} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
