// /home/anas/Desktop/portefolio/portfolio/client/src/contexts/ThemeContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  default: {
    accent1: '0 245 255',
    accent2: '124 58 237',
  },
  matrix: {
    accent1: '0 255 65',
    accent2: '0 143 17',
  },
  cyberpunk: {
    accent1: '252 238 10',
    accent2: '255 0 60',
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent1', themes[theme].accent1);
    root.style.setProperty('--accent2', themes[theme].accent2);
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
