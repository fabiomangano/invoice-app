import React from 'react';
import PropTypes from 'prop-types';
import useToggleTheme from '../../hooks/useToggleTheme';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useToggleTheme();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
