'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { DownArrowIcon } from '@/components/svgs';

const AboutSection = () => {
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

  const scrollIndicatorAnimation = {
    y: [0, 10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center relative px-4"
      variants={titleVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ staggerChildren: 2 }}
    >
      <motion.div
        className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12"
        id="about"
      >
        <motion.div className="flex-1 text-center md:text-left" variants={titleVariants}>
          <h1 className="text-secondary font-bold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[48px] xl:text-[52px] 2xl:text-[60px] mb-4">
            Daniel Agostinho
          </h1>
          <h2 className="text-tertiary font-light text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] xl:text-[36px] 2xl:text-[42px]">
            Front End Web Developer
          </h2>
        </motion.div>
        <motion.div
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 relative rounded-full overflow-hidden"
          variants={titleVariants}
        >
          <Image
            src="/assets/avatar.jpg"
            alt="Daniel Agostinho"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2 cursor-pointer"
        animate={scrollIndicatorAnimation}
        onClick={() => {
          document.getElementById('work-history')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-tertiary text-sm font-light">Scroll</span>
        <DownArrowIcon className="text-primary" />
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
