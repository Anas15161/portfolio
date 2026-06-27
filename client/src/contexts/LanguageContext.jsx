// /home/anas/Desktop/portefolio/portfolio/client/src/contexts/LanguageContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  fr: {
    heroTitle: "Bonjour, je suis",
    downloadCV: "Télécharger CV",
    standardCV: "Version Standard (Design)",
    atsCV: "Version ATS (Texte simple)",
    about: "À Propos",
    aboutMe: "À Propos de Moi",
    skills: "Compétences",
    experience: "Expérience",
    projects: "Projets",
    education: "Formation",
    contact: "Contact",
    send: "Envoyer le message",
    name: "Nom complet",
    email: "Adresse e-mail",
    message: "Votre message...",
    services: "Mes Services",
    github: "Activité GitHub",
    blog: "Articles",
    techStack: "Stack Technique",
    viewProject: "Voir le projet",
    sourceCode: "Code source",
    statusAvailable: "Recherche de Stage PFE",
    statusLocation: "Basé à Rabat, Maroc",
    viewProjects: "Explorer mes Projets",
    experienceDesc: "Un aperçu de mon parcours professionnel et de mes immersions en entreprise."
  },
  en: {
    heroTitle: "Hi, I am",
    downloadCV: "Download Resume",
    standardCV: "Standard Version (Design)",
    atsCV: "ATS Version (Plain text)",
    about: "About",
    aboutMe: "About Me",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
    send: "Send Message",
    name: "Full Name",
    email: "Email Address",
    message: "Your message...",
    services: "My Services",
    github: "GitHub Activity",
    blog: "Articles",
    techStack: "Tech Stack",
    viewProject: "View Project",
    sourceCode: "Source Code",
    statusAvailable: "Looking for PFE Internship",
    statusLocation: "Based in Rabat, Morocco",
    viewProjects: "Explore my Projects",
    experienceDesc: "An overview of my professional journey and corporate immersions."
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-lang');
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === 'en') setLanguage('en');
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'fr' ? 'en' : 'fr';
      localStorage.setItem('portfolio-lang', newLang);
      return newLang;
    });
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
