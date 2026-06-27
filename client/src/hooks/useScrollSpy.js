// /home/anas/Desktop/portefolio/portfolio/client/src/hooks/useScrollSpy.js
import { useState, useEffect } from 'react';

export const useScrollSpy = (ids, offset = 100) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const listener = () => {
      const scrollPosition = window.scrollY + offset;

      const entries = ids.map(id => {
        const element = document.getElementById(id);
        if (element) {
          return {
            id,
            top: element.offsetTop,
            bottom: element.offsetTop + element.offsetHeight,
          };
        }
        return null;
      }).filter(Boolean);

      const current = entries.find(
        entry => scrollPosition >= entry.top && scrollPosition < entry.bottom
      );

      if (current) {
        setActiveId(current.id);
      } else if (scrollPosition < (entries[0]?.top || 0)) {
        setActiveId(''); // Above all sections
      }
    };

    window.addEventListener('scroll', listener);
    listener(); // Check on mount

    return () => window.removeEventListener('scroll', listener);
  }, [ids, offset]);

  return activeId;
};
