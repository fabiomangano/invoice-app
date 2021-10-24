/* eslint-disable react/button-has-type */
/* https://github.com/yannickcr/eslint-plugin-react/issues/1846 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Button.style.scss';

const Button = ({ children, type, onClick, variant, size }) => (
  <button
    className={cn(
      'custom-btn',
      `custom-btn--${variant}`,
      `custom-btn--${size}`,
    )}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  size: 'medium',
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'fluid']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
