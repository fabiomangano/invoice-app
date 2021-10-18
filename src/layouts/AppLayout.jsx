import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { ThemeContext } from '../components/theme-provider/ThemeProvider';
import Appbar from '../components/appbar/Appbar';
import ToggleTheme from '../components/toggle-theme/ToggleTheme';
import Avatar from '../components/avatar/Avatar';
import Logo from '../components/logo/Logo';
import './AppLayout.style.scss';

const AppLayout = ({ children, isMobile }) => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
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
            <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
          </Appbar.Option>
          <Appbar.Divider />
          <Appbar.Option>
            <Avatar alt="Profile Image" />
          </Appbar.Option>
        </Appbar.Menu>
      </Appbar>
      <div className={cn('applayout', 'applayout--vertical')}>{children}</div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default AppLayout;
