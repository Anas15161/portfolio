// /home/anas/Desktop/portefolio/portfolio/client/src/components/ui/ThemeSwitcher.jsx
import { useTheme } from '../../contexts/ThemeContext';
import { Palette } from 'lucide-react';
import { useState } from 'react';

const ThemeSwitcher = () => {
  const { theme, changeTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
        aria-label="Changer de thème"
      >
        <Palette size={20} className="text-accent1" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-32 bg-card border border-gray-700 rounded-xl shadow-xl overflow-hidden z-50">
          {Object.keys(themes).map((t) => (
            <button
              key={t}
              onClick={() => {
                changeTheme(t);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition-colors ${theme === t ? 'text-accent1 font-bold' : 'text-gray-300'}`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
