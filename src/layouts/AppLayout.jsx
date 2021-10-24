import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import { ThemeContext } from '../components/theme-provider/ThemeProvider';
import { mobile } from '../mediaQueries';
import Appbar from '../components/appbar/Appbar';
import ToggleTheme from '../components/toggle-theme/ToggleTheme';
import Avatar from '../components/avatar/Avatar';
import Logo from '../components/logo/Logo';
import './AppLayout.style.scss';

const AppLayout = ({ children }) => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const isMobile = useMediaQuery(mobile);
  const layout = isMobile ? 'applayout--vertical' : 'applayout--horizontal';

  return (
    <div className={cn('applayout', layout)}>
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
      <div className={cn('applayout', layout)}>{children}</div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
