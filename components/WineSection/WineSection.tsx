'use client';

import { motion } from 'framer-motion';
import { wineData } from '@/lib/data';

const WineSection = () => {
  return (
    <motion.div
      className="bg-wine py-20"
      id="wine"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-cream font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-16">
          Wine
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Experience Section */}
          <motion.div
            className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-cream/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-cream font-bold text-2xl md:text-3xl mb-4">Experience</h3>
            <div className="space-y-3">
              <h4 className="text-cream/90 font-semibold text-xl">
                {wineData.experience.position}
              </h4>
              <p className="text-cream/80 font-medium text-lg">{wineData.experience.employer}</p>
              <p className="text-cream/70 font-light text-sm">{wineData.experience.period}</p>
              <p className="text-cream/90 font-light text-base leading-relaxed mt-4">
                {wineData.experience.description}
              </p>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-cream/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-cream font-bold text-2xl md:text-3xl mb-6">Certifications</h3>
            <div className="space-y-4">
              {wineData.certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="bg-cream/5 rounded-lg p-4 border border-cream/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-cream font-semibold text-lg mb-1">{cert.name}</h4>
                  <p className="text-cream/80 text-sm font-light">{cert.organization}</p>
                  <p className="text-cream/70 text-xs font-light mt-1">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WineSection;
