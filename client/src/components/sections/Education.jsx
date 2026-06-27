import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import { educationData } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import { Award, BookOpen, Building2, Monitor, MapPin, CheckCircle2, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const icons = [Building2, Award, Monitor, BookOpen];

const EducationCard = ({ edu, index, language }) => {
  const isActive = index === 0;
  const IconComponent = icons[index % icons.length];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
      }}
      className="relative w-[85vw] md:w-[400px] shrink-0 h-[420px] group cursor-pointer snap-center"
    >
      <div className={`relative w-full h-full p-[1px] rounded-3xl overflow-hidden transition-transform duration-500 ${isActive ? 'bg-gradient-to-r from-accent1 to-accent2 shadow-[0_0_25px_rgba(0,245,255,0.2)]' : 'bg-gray-800/80 hover:bg-gray-700/80 shadow-lg'}`}>
        
        {/* Inner Card Background */}
        <div className="absolute inset-[1px] bg-card/95 backdrop-blur-xl rounded-[23px] z-0"></div>

        {/* --- FRONT SIDE --- */}
        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-10 group-hover:pointer-events-none">
          <div>
            <div className="flex justify-between items-start mb-8">
              <div className={`p-5 rounded-2xl shadow-inner border backdrop-blur-sm flex items-center justify-center ${isActive ? 'bg-accent1/20 text-accent1 border-accent1/30' : 'bg-white/5 text-gray-300 border-white/10'}`}>
                {edu.school === 'EMG Rabat' ? (
                  <img src="/emg.png" alt="EMG Logo" className="w-8 h-8 object-contain" />
                ) : edu.school === 'SUP MTI Rabat' ? (
                  <img src="/sup.png" alt="SUP MTI Logo" className="w-8 h-8 object-contain" />
                ) : (
                  <IconComponent size={32} />
                )}
              </div>
              
              {isActive && (
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent1/10 border border-accent1/30 text-accent1 text-xs font-bold uppercase tracking-wider rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent1 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent1"></span>
                  </span>
                  {language === 'fr' ? 'En cours' : 'Present'}
                </span>
              )}
            </div>

            <h3 className={`text-2xl font-heading font-black mb-3 leading-tight ${isActive ? 'text-white' : 'text-gray-200'}`}>
              {edu.degree[language] || edu.degree}
            </h3>
            <div className={`font-bold text-lg ${isActive ? 'text-accent1' : 'text-accent2'}`}>
              {edu.school}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800/50">
            <span className="inline-block px-4 py-2 bg-gray-900/80 border border-gray-700/50 text-gray-400 text-sm rounded-full font-mono">
              {edu.period[language] || edu.period}
            </span>
          </div>
        </div>

        {/* --- BACK SIDE (HOVER REVEAL) --- */}
        <div className="absolute inset-0 z-20 p-8 flex flex-col bg-gray-900/95 backdrop-blur-2xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 overflow-y-auto hide-scrollbar pointer-events-none group-hover:pointer-events-auto">
          
          <h4 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent border-b border-gray-800 pb-3">
            {language === 'fr' ? 'Détails & Modules' : 'Details & Modules'}
          </h4>
          
          <div className="flex flex-col gap-2 text-xs font-mono text-gray-400 mb-4">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-accent1" /> {edu.location}</span>
            <span className="flex items-center gap-2"><Clock size={14} className="text-accent2" /> {edu.period[language] || edu.period}</span>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            {edu.description?.[language]}
          </p>

          {edu.modules && (
            <div className="mt-auto">
              <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <BookOpen size={14} className="text-accent2" />
                {language === 'fr' ? 'Modules Principaux' : 'Main Modules'}
              </h5>
              <ul className="space-y-2">
                {edu.modules.map((mod, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={14} className="text-accent1 mt-0.5 shrink-0" />
                    <span className="leading-tight">{mod}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </motion.div>
  );
};

const Education = () => {
  const { language, t } = useLanguage();
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <AnimatedSection id="education" className="bg-background pt-24 pb-32 relative overflow-hidden">
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 flex items-center justify-center gap-4">
          <span className="w-16 h-[3px] bg-gradient-to-r from-transparent to-accent2 block hidden md:block"></span>
          {t('education')}
          <span className="w-16 h-[3px] bg-gradient-to-l from-transparent to-accent2 block hidden md:block"></span>
        </h2>
        <p className="text-gray-400 font-mono text-sm max-w-xl mx-auto flex items-center justify-center gap-2">
          {language === 'fr' ? 'Faites glisser pour explorer ' : 'Swipe to explore '}
          <span className="hidden md:inline">(ou utilisez les flèches)</span>
        </p>
      </div>

      <div className="relative max-w-[1400px] mx-auto group">
        
        {/* Navigation Arrows (Desktop) */}
        <button 
          onClick={scrollLeft} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/50 backdrop-blur-md border border-gray-700 text-white hover:bg-accent1 hover:text-black hover:border-accent1 transition-all shadow-xl hidden md:block opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={scrollRight} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/50 backdrop-blur-md border border-gray-700 text-white hover:bg-accent1 hover:text-black hover:border-accent1 transition-all shadow-xl hidden md:block opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 md:px-24 py-8"
        >
          {educationData.map((edu, idx) => (
            <EducationCard key={idx} edu={edu} index={idx} language={language} />
          ))}
        </motion.div>
        
        {/* Gradient fades for edges */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-8 md:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
      </div>
    </AnimatedSection>
  );
};

export default Education;
