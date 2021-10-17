import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { mobile } from '../mediaQueries';
import Appbar from '../components/appbar/Appbar';
import './AppLayout.style.scss';

const AppLayout = ({ children }) => {
  const isMobile = useMediaQuery(mobile);
  const layoutVariant = isMobile
    ? 'applayout--vertical'
    : 'applayout--horizontal';
  return (
    <div className={cn('applayout', layoutVariant)}>
      <Appbar variant={isMobile ? 'horizontal' : 'vertical'} />
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
