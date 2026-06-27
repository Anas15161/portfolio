// /home/anas/Desktop/portefolio/portfolio/client/src/components/layout/Footer.jsx
import { personalInfo } from '../../data/portfolioData';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-gray-800 py-12">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <div className="text-3xl font-heading font-black bg-clip-text text-transparent bg-gradient-to-r from-accent1 to-accent2 mb-2">
            AH
          </div>
          <p className="text-gray-400 text-sm">
            Conçu & développé par {personalInfo.name} · Rabat {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex gap-6">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent1 transition-colors">
            <Github size={24} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent2 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
