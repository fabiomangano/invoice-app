import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import './Logo.style.scss';

const Logo = () => (
  <div className="logo">
    <div className="logo__top-box" />
    <div className="logo__bottom-box" />
    <LogoIcon className="logo__icon" />
  </div>
);

export default Logo;
