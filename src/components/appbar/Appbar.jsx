import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Menu from './menu/Menu';
import Option from './option/Option';
import Divider from './divider/Divider';
import './Appbar.style.scss';

export const Context = React.createContext();

const Appbar = ({ children, variant }) => (
  <Context.Provider value={variant}>
    <div className={cn('appbar', `appbar--${variant}`)}>{children}</div>
  </Context.Provider>
);

Appbar.Menu = Menu;
Appbar.Option = Option;
Appbar.Divider = Divider;

Appbar.defaultProps = {
  variant: 'horizontal',
};

Appbar.propTypes = {
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
  children: PropTypes.node.isRequired,
};

export default Appbar;
