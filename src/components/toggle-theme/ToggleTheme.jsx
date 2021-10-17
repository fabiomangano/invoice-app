import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as LightModeIcon } from '../../assets/icon-moon.svg';
import { ReactComponent as DarkModeIcon } from '../../assets/icon-sun.svg';
import './ToggleTheme.style.scss';

const ToggleTheme = ({ theme, setTheme }) => (
  <button className="toggle-theme" type="button" onClick={setTheme}>
    {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
  </button>
);

ToggleTheme.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default ToggleTheme;
