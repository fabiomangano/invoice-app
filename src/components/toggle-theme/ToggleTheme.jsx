import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DarkModeIcon } from '../../assets/icon-moon.svg';
import { ReactComponent as LightModeIcon } from '../../assets/icon-sun.svg';
import './ToggleTheme.style.scss';

const ToggleTheme = ({ theme, toggleTheme }) => (
  <button className="toggle-theme" type="button" onClick={toggleTheme}>
    {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
  </button>
);

ToggleTheme.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default ToggleTheme;
