import { useState, useEffect } from 'react';

const useToggleTheme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
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
