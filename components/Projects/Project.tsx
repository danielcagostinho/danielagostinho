'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { Project as ProjectType } from '@/types';

interface ProjectProps {
  project: ProjectType;
  index: number;
}

const Project = ({ project, index: _index }: ProjectProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    if (inView && !viewed) {
      setViewed(true);
      controls.start('visible');
    }
  }, [controls, inView, viewed]);

  const animationVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: {
          duration: 1,
          delay: 0.2,
        },
        y: {
          duration: 0.5,
          delay: 0,
        },
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={animationVariants}
      animate={controls}
      className="mb-10 p-10 rounded-[20px] border-2 border-gray-100 bg-[#637fcd11] transition-all duration-300 hover:scale-[1.005] hover:shadow-lg"
    >
      {/* Mobile: Stack vertically, Desktop: Side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {/* Project Image */}
        <div className="w-full h-[200px] md:h-[340px]">
          <a
            href={project.url || project.github}
            target="_blank"
            rel="noreferrer"
            className="block w-full h-full"
          >
            <Image
              src={project.imgSrc}
              alt={`${project.name} Thumbnail`}
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-[20px] grayscale hover:grayscale-0 transition-all duration-300"
            />
          </a>
        </div>

        {/* Project Description */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h4 className="text-secondary font-bold text-lg md:text-xl lg:text-2xl tracking-tight mb-4">
            {project.name}
          </h4>
          <p className="text-tertiary font-light text-base md:text-lg leading-[140%] mb-4 md:w-4/5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-white text-sm"
                style={{ backgroundColor: t.color }}
              >
                {t.name}
              </span>
            ))}
          </div>

          <div className="flex gap-5 justify-center md:justify-start">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-[1.4] transition-transform duration-300"
              >
                <Image
                  src="/assets/icons/GithubIcon.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </a>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-[1.4] transition-transform duration-300"
              >
                <Image
                  src="/assets/icons/ExternalIcon.svg"
                  alt="External Link"
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
