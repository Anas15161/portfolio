// /home/anas/Desktop/portefolio/portfolio/client/src/components/ui/LanguageSwitcher.jsx
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-2 p-2 rounded-full hover:bg-white/10 transition-colors text-sm font-bold uppercase"
      aria-label="Changer de langue"
    >
      <Globe size={18} className="text-accent2" />
      <span>{language}</span>
    </button>
  );
};

export default LanguageSwitcher;
