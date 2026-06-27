import { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import ProjectCard from '../ui/ProjectCard';
import { projectsData } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["Tous", "Web", "SaaS", "Backend", "Mobile"];

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects = projectsData.filter(project => 
    activeFilter === "Tous" ? true : project.category.includes(activeFilter)
  );

  return (
    <AnimatedSection id="projects" className="bg-background pt-24 pb-32 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 flex items-center gap-4">
              <span className="w-16 h-[3px] bg-gradient-to-r from-accent1 to-transparent block"></span>
              {t('projects')}
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'bg-accent1 text-black font-bold shadow-[0_0_15px_rgba(0,245,255,0.4)] scale-105' 
                    : 'bg-gray-900/50 text-gray-400 border border-gray-800 hover:border-accent1/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </AnimatedSection>
  );
};

export default Projects;
