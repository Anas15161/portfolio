import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const ProjectCard = ({ project }) => {
  const { language, t } = useLanguage();
  const cardRef = useRef(null);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
    
    // Calculate tilt (-10 to 10 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Generate an abstract SVG pattern URL for the background
  const patternSvg = encodeURIComponent(`
    <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM29.5 49c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5zm0-11c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zM15 29c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zM45 29c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z" fill="rgba(255,255,255,0.03)" fill-rule="evenodd"/>
    </svg>
  `);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
        className="group relative h-full glass rounded-2xl border border-gray-800 p-6 flex flex-col justify-between overflow-hidden shadow-xl"
      >
        {/* Abstract Background Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-50 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url("data:image/svg+xml;utf8,${patternSvg}")`, backgroundSize: '60px 60px' }}
        ></div>

        {/* Spotlight Gradient on Hover */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 mix-blend-screen"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,245,255,0.1), transparent 40%)`
          }}
        />

        {/* Header / Titles */}
        <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-accent1/10 text-accent1 rounded-xl shadow-inner border border-accent1/20">
              <Code2 size={24} />
            </div>
            <span className="inline-block px-3 py-1 bg-gray-900/80 border border-gray-700 text-gray-300 rounded-full text-xs font-mono backdrop-blur-sm">
              {project.status[language] || project.status}
            </span>
          </div>

          <h3 className="text-2xl font-heading font-black text-white mb-3 group-hover:text-accent1 transition-colors relative inline-block">
            {project.title}
            {/* Glitch pseudo element (simulated via scale on hover) */}
            <span className="absolute inset-0 text-accent2 opacity-0 group-hover:opacity-50 blur-sm transition-all duration-300 translate-x-1">{project.title}</span>
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {project.description[language] || project.description}
          </p>
        </div>

        {/* Footer / Stack / Links */}
        <div className="relative z-10 mt-auto" style={{ transform: "translateZ(40px)" }}>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech, idx) => (
              <span key={idx} className="px-2 py-1 bg-background/50 border border-gray-800 text-gray-300 rounded text-xs font-mono backdrop-blur-md">
                {tech}
              </span>
            ))}
          </div>
          
          {/* Action Links */}
          <div className="flex gap-4">
            <a 
              href={project.github} 
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 flex-1 py-2.5 bg-gray-900 hover:bg-gray-800 text-white border border-gray-700 hover:border-accent1/50 rounded-xl transition-colors text-sm font-medium shadow-lg"
            >
              <Github size={16} /> {t('sourceCode')}
            </a>
            <Link 
              to={`/project/${project.id}`}
              className="flex items-center justify-center gap-2 flex-1 py-2.5 bg-accent1/10 hover:bg-accent1 text-accent1 hover:text-black border border-accent1/30 hover:border-accent1 rounded-xl transition-all text-sm font-bold shadow-[0_0_15px_rgba(0,245,255,0.1)] hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]"
            >
              <ExternalLink size={16} /> {t('viewProject')}
            </Link>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
