import React from 'react';
import cn from 'classnames';
import { Context } from '../Appbar';
import './Divider.style.scss';

const Divider = () => {
  const variant = React.useContext(Context);
  return <hr className={cn('divider', `divider--${variant}`)} />;
};

export default Divider;
