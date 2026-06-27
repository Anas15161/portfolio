import { useRef } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import TimelineItem from '../ui/TimelineItem';
import { experienceData } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion, useScroll } from 'framer-motion';

const Experience = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <AnimatedSection id="experience" className="bg-background pt-24 pb-32 relative">
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 flex items-center justify-center gap-4">
          <span className="w-16 h-[3px] bg-gradient-to-r from-transparent to-accent1 block hidden md:block"></span>
          {t('experience')}
          <span className="w-16 h-[3px] bg-gradient-to-l from-transparent to-accent1 block hidden md:block"></span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {t('experienceDesc')}
        </p>
      </div>

      <div ref={containerRef} className="relative max-w-5xl mx-auto px-6 md:px-0">
        {/* Ligne grise de fond (statique) */}
        <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 -translate-x-1/2"></div>
        
        {/* Ligne animée lumineuse (dynamique au scroll) */}
        <motion.div 
          className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent1 to-accent2 shadow-[0_0_20px_rgba(0,245,255,0.8)] origin-top -translate-x-1/2 z-0"
          style={{ scaleY: scrollYProgress }}
        ></motion.div>

        <div className="relative z-10 flex flex-col gap-12 md:gap-24">
          {experienceData.map((exp, idx) => (
            <TimelineItem key={idx} data={exp} index={idx} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
