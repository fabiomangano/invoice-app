import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Appbar from '../components/appbar/Appbar';
import ToggleTheme from '../components/toggle-theme/ToggleTheme';
import Avatar from '../components/avatar/Avatar';
import Logo from '../components/logo/Logo';
import './AppLayout.style.scss';

const AppLayout = ({ children, isMobile }) => (
  <div
    className={cn(
      'applayout',
      isMobile ? 'applayout--vertical' : 'applayout--horizontal',
    )}
  >
    <Appbar variant={isMobile ? 'horizontal' : 'vertical'}>
      <Logo />
      <Appbar.Menu>
        <Appbar.Option>
          <ToggleTheme />
        </Appbar.Option>
        <Appbar.Divider />
        <Appbar.Option>
          <Avatar />
        </Appbar.Option>
      </Appbar.Menu>
    </Appbar>
    {children}
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default AppLayout;
