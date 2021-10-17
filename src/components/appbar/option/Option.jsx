import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Context } from '../Appbar';
import './Option.style.scss';

const Option = ({ children }) => {
  const variant = React.useContext(Context);
  return <div className={cn('option', `option--${variant}`)}>{children}</div>;
};

Option.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Option;
