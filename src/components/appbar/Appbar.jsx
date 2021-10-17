import React from 'react';
import Avatar from '../avatar/Avatar';
import ToggleTheme from '../toggle-theme/ToggleTheme';
import Logo from '../logo/Logo';
import './Appbar.style.scss';

const Appbar = () => (
  <div className="appbar">
    <Logo />
    <div className="appbar__menu">
      <div className="appbar__option">
        <ToggleTheme theme="dark" setTheme={() => {}} />
      </div>
      <hr className="appbar__divider" />
      <div className="appbar__option">
        <Avatar alt="Profile img" />
      </div>
      <hr className="appbar__divider" />
    </div>
  </div>
);

export default Appbar;
