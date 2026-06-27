import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import { servicesData } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';

const ServiceCard = ({ service, index, language }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const Icon = service.icon;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
      }}
      className="relative h-full group"
    >
      <div 
        ref={cardRef} 
        onMouseMove={handleMouseMove}
        className="relative h-full p-[1px] rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 bg-gray-800/80 shadow-lg"
      >
        {/* Magnetic Hover Effect */}
        <div 
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,245,255,0.15), transparent 40%)`
          }}
        />

        {/* Inner Card */}
        <div className="relative z-10 h-full bg-card/95 backdrop-blur-xl rounded-2xl p-8 flex flex-col justify-between border border-gray-700/50 group-hover:border-accent1/30 transition-colors">
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-4 bg-accent1/10 text-accent1 rounded-xl shadow-[0_0_15px_rgba(0,245,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,245,255,0.5)] group-hover:scale-110 transition-all duration-300">
                <Icon size={32} />
              </div>
              <span className="text-6xl font-black text-gray-800/30 group-hover:text-accent1/10 transition-colors duration-300 select-none">
                0{index + 1}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent1 transition-colors">
              {service.title[language] || service.title}
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              {service.description[language] || service.description}
            </p>
          </div>

          {/* Tech Badges */}
          {service.tech && (
            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-800/50">
              {service.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-gray-900 border border-gray-700 text-gray-300 text-xs font-mono rounded-full group-hover:border-accent2/50 group-hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <AnimatedSection id="services" className="bg-background py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 flex items-center justify-center gap-4">
            <span className="w-16 h-[3px] bg-gradient-to-r from-transparent to-accent1 block hidden md:block"></span>
            {t('services')}
            <span className="w-16 h-[3px] bg-gradient-to-l from-transparent to-accent1 block hidden md:block"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'fr' 
              ? "Des solutions sur mesure de la conception de la base de données jusqu'à l'interface utilisateur."
              : "Tailored solutions from database design to user interface."}
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {servicesData.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} language={language} />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Services;
