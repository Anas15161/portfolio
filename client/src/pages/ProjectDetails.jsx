import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Code2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { projectsData } from '../data/portfolioData';
import { useEffect } from 'react';

const ProjectDetails = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  
  const project = projectsData.find(p => p.id === parseInt(id));

  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 pb-32">
        <div className="text-center">
          <h2 className="text-3xl font-heading font-black mb-4">Projet introuvable</h2>
          <Link to="/" className="text-accent1 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background pt-32 pb-32 relative min-h-screen"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-accent1 mb-12 transition-colors font-mono"
        >
          <ArrowLeft size={20} />
          {language === 'fr' ? 'Retour aux projets' : 'Back to projects'}
        </Link>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block px-3 py-1 bg-gray-900/80 border border-gray-700 text-gray-300 rounded-full text-xs font-mono backdrop-blur-sm">
                {project.status[language] || project.status}
              </span>
              <div className="flex gap-2">
                {project.category.map((cat, idx) => (
                  <span key={idx} className="text-accent2 text-sm font-mono opacity-80">#{cat}</span>
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
              {project.title}
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {project.longDescription 
                ? project.longDescription[language] 
                : project.description[language] || project.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href={project.github} 
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white border border-gray-700 hover:border-accent1/50 rounded-xl transition-colors font-medium shadow-lg"
              >
                <Github size={20} /> {t('sourceCode')}
              </a>
              <a 
                href={project.demo} 
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-accent1/10 hover:bg-accent1 text-accent1 hover:text-black border border-accent1/30 hover:border-accent1 rounded-xl transition-all font-bold shadow-[0_0_15px_rgba(0,245,255,0.1)] hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]"
              >
                <ExternalLink size={20} /> {t('viewProject')}
              </a>
            </div>
          </div>

          {/* Tech Stack Box */}
          <div className="glass rounded-2xl border border-gray-800 p-8 h-fit">
            <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-3 border-b border-gray-800 pb-4">
              <Code2 className="text-accent1" size={24} />
              {language === 'fr' ? 'Technologies Utilisées' : 'Technologies Used'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 bg-gray-900/80 border border-gray-700 text-white rounded-lg text-sm font-mono backdrop-blur-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Features & Screenshots Section */}
        <div className="space-y-24">
          
          {/* Features (if available) */}
          {project.features && (
            <section>
              <h2 className="text-3xl font-heading font-black mb-8 flex items-center gap-4">
                <span className="w-8 h-[3px] bg-accent2 block"></span>
                {language === 'fr' ? 'Fonctionnalités Clés' : 'Key Features'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features[language].map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-6 glass rounded-xl border border-gray-800/50 hover:border-accent2/30 transition-colors">
                    <CheckCircle2 className="text-accent2 shrink-0 mt-1" size={24} />
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Screenshots Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <section>
              <h2 className="text-3xl font-heading font-black mb-8 flex items-center gap-4">
                <span className="w-8 h-[3px] bg-accent1 block"></span>
                {language === 'fr' ? 'Captures d\'écran' : 'Screenshots'}
              </h2>
              <div className={`grid grid-cols-1 ${project.screenshots.length > 1 ? 'md:grid-cols-2' : ''} gap-8`}>
                {project.screenshots.map((imgUrl, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-gray-800/80 shadow-2xl group relative bg-gray-950/40 hover:border-accent1/30 transition-all flex justify-center items-center p-4 min-h-[300px]">
                    <img 
                      src={imgUrl} 
                      alt={`${project.title} screenshot ${idx + 1}`} 
                      className="max-h-[460px] w-auto object-contain rounded-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}


        </div>

      </div>
    </motion.div>
  );
};

export default ProjectDetails;
