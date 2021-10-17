import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { mobile } from '../mediaQueries';
import Appbar from '../components/appbar/Appbar';
import ToggleTheme from '../components/toggle-theme/ToggleTheme';
import Avatar from '../components/avatar/Avatar';
import Logo from '../components/logo/Logo';
import './AppLayout.style.scss';

const AppLayout = ({ children }) => {
  const isMobile = useMediaQuery(mobile);
  const orientation = isMobile
    ? 'applayout--vertical'
    : 'applayout--horizontal';
  return (
    <div className={cn('applayout', orientation)}>
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
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
