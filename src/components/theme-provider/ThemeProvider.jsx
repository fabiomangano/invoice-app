import React from 'react';
import PropTypes from 'prop-types';
import useToggleTheme from '../../hooks/useToggleTheme';

export const ThemeContext = React.createContext({
  theme: 'light',
  setTheme: () => null,
});

const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useToggleTheme();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
