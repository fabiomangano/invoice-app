import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as LightModeIcon } from '../../assets/logo.svg';
import { ReactComponent as DarkModeIcon } from '../../assets/icon-sun.svg';

const ToggleTheme = ({ theme, setTheme }) => (
  <button type="button" setTheme={setTheme}>
    {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
  </button>
);

ToggleTheme.propTypes = {
  theme: PropTypes.oneOf('light', 'dark').isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default ToggleTheme;
