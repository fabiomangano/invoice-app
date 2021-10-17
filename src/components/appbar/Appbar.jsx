import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Menu from './menu/Menu';
import Option from './option/Option';
import Divider from './divider/Divider';
import Avatar from '../avatar/Avatar';
import ToggleTheme from '../toggle-theme/ToggleTheme';
import Logo from '../logo/Logo';
import './Appbar.style.scss';

export const Context = React.createContext();

const Appbar = ({ variant }) => (
  <Context.Provider value={variant}>
    <div className={cn('appbar', `appbar--${variant}`)}>
      <Logo />
      <Menu>
        <Option>
          <ToggleTheme theme="dark" setTheme={() => {}} />
        </Option>
        <Divider />
        <Option>
          <Avatar alt="Profile img" />
        </Option>
        <Divider />
      </Menu>
    </div>
  </Context.Provider>
);

Appbar.defaultProps = {
  variant: 'horizontal',
};

Appbar.propTypes = {
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default Appbar;
