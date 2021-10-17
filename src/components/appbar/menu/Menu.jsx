import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Context } from '../Appbar';
import './Menu.style.scss';

const Menu = ({ children }) => {
  const variant = React.useContext(Context);
  return <div className={cn('menu', `menu--${variant}`)}>{children}</div>;
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Menu;
