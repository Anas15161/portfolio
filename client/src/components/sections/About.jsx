import AnimatedSection from '../ui/AnimatedSection';
import { personalInfo } from '../../data/portfolioData';
import CountUp from 'react-countup';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

const About = () => {
  const { language, t } = useLanguage();

  return (
    <AnimatedSection id="about" className="bg-background pt-24 pb-24 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-accent1/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Avatar 3D Pop-Out Effect */}
          <div className="w-full md:w-5/12 flex justify-center mt-10 md:mt-0 relative">
            <motion.div 
              className="relative w-64 h-auto md:w-80 flex items-center justify-center group"
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ perspective: 1000 }}
            >
              {/* Aura Animation Behind */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent1 to-accent2 blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse-slow z-0"></div>

              {/* Orbiting rings */}
              <div className="absolute w-[110%] h-[110%] rounded-full border border-accent1/30 animate-[spin_10s_linear_infinite] z-0 pointer-events-none"></div>
              <div className="absolute w-[125%] h-[125%] rounded-full border border-dashed border-accent2/40 animate-[spin_15s_linear_infinite_reverse] z-0 pointer-events-none"></div>

              {/* Image */}
              <img 
                src="/me.png" 
                alt="Anas Haddou" 
                className="relative w-full h-auto object-contain z-10 drop-shadow-[0_0_20px_rgba(0,245,255,0.4)] group-hover:drop-shadow-[0_0_35px_rgba(124,58,237,0.6)] group-hover:-translate-y-4 transition-all duration-500 ease-out"
                style={{ transformStyle: 'preserve-3d' }}
              />

              {/* Floating Tags */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-8 glass px-4 py-2 rounded-full border border-accent1/30 text-xs font-bold text-accent1 flex items-center gap-2 z-20 shadow-[0_0_15px_rgba(0,245,255,0.2)] backdrop-blur-md"
              >
                🚀 {language === 'fr' ? 'Passionné IA' : 'AI Enthusiast'}
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 -left-10 glass px-4 py-2 rounded-full border border-accent2/30 text-xs font-bold text-accent2 flex items-center gap-2 z-20 shadow-[0_0_15px_rgba(124,58,237,0.2)] backdrop-blur-md"
              >
                <img src="/emg.png" alt="EMG Logo" className="w-4 h-4 object-contain" /> EMG Rabat
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="w-full md:w-7/12">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-8 flex items-center gap-4">
              <span className="w-16 h-[3px] bg-gradient-to-r from-accent1 to-transparent block"></span>
              {t('aboutMe')}
            </h2>
            
            {/* Bio with dangerouslySetInnerHTML for highlighted words */}
            <p 
              className="text-gray-400 text-lg leading-relaxed mb-10 bio-content"
              dangerouslySetInnerHTML={{ __html: personalInfo.bio[language] }}
            ></p>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-2xl border border-gray-800/50 text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent1/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-4xl md:text-5xl font-black text-accent1 mb-2 relative z-10 drop-shadow-lg">
                  <CountUp end={10} duration={2.5} enableScrollSpy />+
                </div>
                <div className="text-sm font-bold tracking-wider uppercase text-gray-400 relative z-10 group-hover:text-white transition-colors">{language === 'fr' ? 'Projets' : 'Projects'}</div>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-gray-800/50 text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent2/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-4xl md:text-5xl font-black text-accent2 mb-2 relative z-10 drop-shadow-lg">
                  <CountUp end={2} duration={2.5} enableScrollSpy />
                </div>
                <div className="text-sm font-bold tracking-wider uppercase text-gray-400 relative z-10 group-hover:text-white transition-colors">{language === 'fr' ? 'Stages' : 'Internships'}</div>
              </div>

              <div className="glass p-6 rounded-2xl border border-gray-800/50 text-center col-span-2 md:col-span-1 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 relative z-10 drop-shadow-lg flex items-center justify-center">
                  <CountUp end={4} duration={2.5} enableScrollSpy />
                  <span className="text-xl text-gray-500 ml-1">ans</span>
                </div>
                <div className="text-sm font-bold tracking-wider uppercase text-gray-400 relative z-10 group-hover:text-white transition-colors">{language === 'fr' ? 'Expérience' : 'Experience'}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
