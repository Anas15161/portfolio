import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const TimelineItem = ({ data, index }) => {
  const { language } = useLanguage();
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isEven = index % 2 === 0;

  return (
    <div className="relative w-full flex items-center justify-between group timeline-row">
      
      {/* Point central de la timeline */}
      <motion.div 
        initial={{ backgroundColor: '#0a0a0a', borderColor: '#374151', scale: 0.8 }}
        whileInView={{ backgroundColor: 'rgb(var(--accent1))', borderColor: 'rgb(var(--accent1))', scale: 1.2 }}
        viewport={{ once: false, margin: "-50% 0px -50% 0px" }}
        transition={{ duration: 0.4 }}
        className="absolute left-0 md:left-1/2 top-8 md:top-1/2 w-4 h-4 -translate-x-1/2 md:-translate-y-1/2 rounded-full border-4 z-10 shadow-[0_0_20px_rgba(0,245,255,0.6)]"
      ></motion.div>

      {/* Card Wrapper */}
      <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'}`}>
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="relative"
        >
          {/* Spotlight Card */}
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="group/card relative glass rounded-2xl border border-gray-800/60 p-8 overflow-hidden transition-all duration-500 hover:border-accent1/50 shadow-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:-translate-y-1"
          >
            {/* Spotlight Gradient */}
            <div 
              className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300 opacity-0 group-hover/card:opacity-100"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,245,255,0.06), transparent 40%)`
              }}
            />

            {/* Content (z-10 pour passer au dessus du spotlight) */}
            <div className="relative z-10">
              <span className="inline-block text-accent1 font-mono text-sm mb-6 px-4 py-1.5 bg-accent1/10 rounded-full border border-accent1/20 shadow-[0_0_15px_rgba(0,245,255,0.1)]">
                {data.period[language] || data.period}
              </span>
              
              <div className={`flex items-center gap-5 mb-6 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                {/* Logo Glassmorphism (Première lettre de l'entreprise) */}
                <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-inner text-2xl font-black text-white backdrop-blur-sm group-hover/card:scale-110 group-hover/card:border-accent1/40 group-hover/card:text-accent1 transition-all duration-500 overflow-hidden">
                  {data.company.includes('SUP MTI') ? (
                    <img src="/sup.png" alt="SUP MTI Logo" className="w-10 h-10 object-contain" />
                  ) : (
                    data.company.charAt(0)
                  )}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-1 group-hover/card:text-accent1 transition-colors duration-300">
                    {data.role[language] || data.role}
                  </h3>
                  <h4 className="text-accent2 text-sm font-bold uppercase tracking-wider">{data.company}</h4>
                </div>
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                {data.description[language] || data.description}
              </p>
              
              {/* Tech Stack */}
              <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                {data.stack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-gray-900/50 border border-gray-700/50 hover:border-accent1/50 hover:bg-accent1/10 hover:text-accent1 text-gray-300 rounded-lg text-xs font-mono transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default TimelineItem;
