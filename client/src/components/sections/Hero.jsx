import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useLanguage } from '../../contexts/LanguageContext';
import ParticleBackground from '../ui/ParticleBackground';

const Hero = () => {
  const { language, t } = useLanguage();
  const typedTitle = useTypewriter(personalInfo.title, 60);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-24">
      
      {/* Background Glows & Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-accent1/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-accent2/20 rounded-full blur-[150px]"></div>
        <ParticleBackground />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center glass p-12 rounded-3xl border border-gray-800/50 shadow-2xl relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Glass glare effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-t-3xl"></div>

          {/* Status Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent1/10 border border-accent1/30 text-accent1 text-sm font-mono mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent1 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent1"></span>
            </span>
            {t('statusAvailable')}
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-heading font-black text-white mb-6 relative z-10"
          >
            {t('heroTitle')} <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2 animate-gradient-x drop-shadow-[0_0_15px_rgba(0,245,255,0.4)]">{personalInfo.name}</span>
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-mono text-gray-300 mb-8 h-[40px]"
          >
            {typedTitle}<span className="animate-pulse">|</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed bio-content"
            dangerouslySetInnerHTML={{ __html: personalInfo.bio[language] }}
          />

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 bg-transparent border border-accent1 hover:bg-accent1/10 text-accent1 font-bold rounded-full transition-all hover:scale-105"
            >
              {t('viewProjects')} <ArrowRight size={20} />
            </button>

            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-card border border-gray-700 hover:border-accent1 text-white rounded-full transition-all hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
            >
              <Github size={20} /> GitHub <span className="opacity-50">↗</span>
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-card border border-gray-700 hover:border-accent2 text-white rounded-full transition-all hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]"
            >
              <Linkedin size={20} /> LinkedIn <span className="opacity-50">↗</span>
            </a>
            
            <div className="relative group">
              <button 
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent1 to-accent2 text-black font-bold rounded-full transition-all hover:opacity-90 hover:scale-105"
              >
                {t('downloadCV')} <Download size={20} />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-card border border-gray-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden z-50 text-left">
                <a 
                  href="/CV.pdf" 
                  download="Anas_Haddou_CV_Design.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-white hover:bg-gray-800 hover:text-accent1 transition-colors text-sm font-medium border-b border-gray-700 block"
                >
                  {t('standardCV')}
                </a>
                <a 
                  href="/CV_Anas_Haddou_ATS-1.pdf" 
                  download="Anas_Haddou_CV_ATS.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-white hover:bg-gray-800 hover:text-accent2 transition-colors text-sm font-medium block"
                >
                  {t('atsCV')}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-background/50 backdrop-blur-md border-t border-gray-800/50 py-4 z-20">
        <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {/* Double content for infinite scrolling effect */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center justify-around min-w-full gap-12 px-12">
              {['React', 'Node.js', 'Python', 'TailwindCSS', 'Docker', 'PostgreSQL', 'MongoDB', 'Git', 'Agile'].map((tech, idx) => (
                <span key={idx} className="text-gray-400 font-mono text-sm tracking-wider uppercase flex items-center gap-2 hover:text-accent1 transition-colors cursor-default">
                  <span className="text-accent2">•</span> {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
