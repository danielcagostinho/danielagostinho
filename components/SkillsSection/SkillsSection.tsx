'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const SkillsSection = () => {
  const bubbleVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  const skills = [
    'React.js',
    'Angular',
    'C#',
    'Node.js',
    'Redux',
    'HTML5',
    'CSS3',
    'SASS',
    'Figma',
    'PostgreSQL',
  ];

  return (
    <div className="bg-primary py-20" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-white font-bold text-xl md:text-2xl lg:text-3xl mb-6">My Skills</h3>
            <p className="text-white font-light text-base md:text-lg leading-[140%] mb-6">
              <span className="md:hidden">Below </span>
              <span className="hidden md:inline">To the right </span>
              are skills that I&apos;ve picked up through my development journey. Although I use C#,
              Angular and SQL in my every day work, I prefer to code in React.js! Here is a more
              extensive list of my skills:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {skills.map(skill => (
                <p
                  key={skill}
                  className="text-white font-light text-base md:text-lg leading-[140%]"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>

          <motion.div
            variants={bubbleVariants}
            animate="visible"
            initial="hidden"
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex items-center justify-center py-16 md:py-20"
          >
            {/* Container for circular layout - centered */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] flex items-center justify-center">
              {/* Main React Icon - Center (no float) */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-[106px] lg:h-[106px] rounded-full">
                <Image
                  src="/assets/icons/ReactIcon.svg"
                  alt="React.js logo"
                  fill
                  className="object-contain"
                />
              </div>

              {/* HTML5 - Top Left */}
              <div
                className="absolute top-[15%] left-[15%] w-10 h-10 md:w-12 md:h-12 lg:w-[53px] lg:h-[53px] rounded-full bg-white animate-float"
                style={{ animationDelay: '0.5s' }}
              >
                <Image
                  src="/assets/icons/HTML5Icon.svg"
                  alt="HTML5 Icon"
                  fill
                  className="object-scale-down p-1"
                />
              </div>

              {/* CSS3 - Top Right */}
              <div
                className="absolute top-[15%] right-[15%] w-10 h-10 md:w-12 md:h-12 lg:w-[53px] lg:h-[53px] rounded-full bg-white animate-float"
                style={{ animationDelay: '1s' }}
              >
                <Image
                  src="/assets/icons/CSS3Icon.svg"
                  alt="CSS3 Icon"
                  fill
                  className="object-scale-down p-1"
                />
              </div>

              {/* Sass - Right */}
              <div
                className="absolute top-1/2 -translate-y-1/2 right-[5%] w-10 h-10 md:w-12 md:h-12 lg:w-[53px] lg:h-[53px] rounded-full bg-white animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <Image
                  src="/assets/icons/SassIcon.svg"
                  alt="Sass Icon"
                  fill
                  className="object-scale-down p-1"
                />
              </div>

              {/* Figma - Bottom Right */}
              <div
                className="absolute bottom-[15%] right-[15%] w-10 h-10 md:w-12 md:h-12 lg:w-[53px] lg:h-[53px] rounded-full bg-white animate-float"
                style={{ animationDelay: '2s' }}
              >
                <Image
                  src="/assets/icons/FigmaIcon.png"
                  alt="Figma Icon"
                  fill
                  className="object-scale-down p-2"
                />
              </div>

              {/* Node - Bottom Left */}
              <div
                className="absolute bottom-[15%] left-[15%] w-10 h-10 md:w-12 md:h-12 lg:w-[53px] lg:h-[53px] rounded-full bg-white animate-float"
                style={{ animationDelay: '2.5s' }}
              >
                <Image
                  src="/assets/icons/NodeIcon.png"
                  alt="Node Icon"
                  fill
                  className="object-scale-down p-2"
                />
              </div>

              {/* Redux - Left */}
              <div
                className="absolute top-1/2 -translate-y-1/2 left-[5%] w-10 h-10 md:w-12 md:h-12 lg:w-[53px] lg:h-[53px] rounded-full bg-white animate-float"
                style={{ animationDelay: '3s' }}
              >
                <Image
                  src="/assets/icons/ReduxIcon.svg"
                  alt="Redux Icon"
                  fill
                  className="object-scale-down p-2"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
