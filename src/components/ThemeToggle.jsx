import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);

      // Use setTimeout to ensure DOM is updated before reinitializing
      setTimeout(() => {
        if (window.initializeSkillToggles) {
          console.log("Reinitializing skill toggles after theme change");
          window.initializeSkillToggles();
        }
      }, 0);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-transparent border-none cursor-pointer p-2"
      aria-label="Toggle theme"
    >
      {/* Your existing SVG code here */}
    </button>
  );
};

export default ThemeToggle;