import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useLanguage } from '../../contexts/LanguageContext';
import { Menu, X, FileText } from 'lucide-react';
import ScrollProgress from './ScrollProgress';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import CvViewer from '../ui/CvViewer';

const navLinks = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Expérience' },
  { id: 'projects', label: 'Projets' },
  { id: 'education', label: 'Formation' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  const activeSection = useScrollSpy(navLinks.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-gray-800 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="text-2xl font-heading font-black cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-accent1 to-accent2"
            onClick={() => scrollToSection('home')}
          >
            AH
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-accent1 ${
                  activeSection === link.id ? 'text-accent1' : 'text-gray-300'
                }`}
              >
                {t(link.id) || link.label}
              </button>
            ))}
            <div className="flex items-center gap-4 pl-4 border-l border-gray-800">
              <button 
                onClick={() => setIsCvOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-accent1/10 hover:bg-accent1 text-accent1 hover:text-black border border-accent1/30 rounded-lg text-sm font-bold transition-all shadow-[0_0_10px_rgba(0,245,255,0.1)] hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]"
              >
                <FileText size={16} />
                <span>{language === 'fr' ? 'Mon CV' : 'My Resume'}</span>
              </button>
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-card border-b border-gray-800 shadow-xl">
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`py-3 px-4 text-left font-medium rounded-lg ${
                    activeSection === link.id ? 'bg-accent1/10 text-accent1' : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {t(link.id) || link.label}
                </button>
              ))}
              <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-gray-800">
                <button 
                  onClick={() => { setIsCvOpen(true); setIsMobileMenuOpen(false); }}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-accent1 text-black font-bold rounded-lg"
                >
                  <FileText size={18} />
                  <span>{language === 'fr' ? 'Voir Mon CV' : 'View My Resume'}</span>
                </button>
                <div className="flex items-center justify-center gap-6 pb-2">
                  <ThemeSwitcher />
                  <LanguageSwitcher />
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
      <ScrollProgress />
      <CvViewer isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </>
  );
};

export default Navbar;
