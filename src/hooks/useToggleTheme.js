import { useState, useEffect } from 'react';

const useToggleTheme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.classList.add('-dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return { theme, toggleTheme };
};

export default useToggleTheme;
