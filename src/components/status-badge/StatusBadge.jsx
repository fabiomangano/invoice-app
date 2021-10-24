import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './StatusBadge.style.scss';

export const STATUS = {
  PENDING: 'pending',
  PAID: 'paid',
  DRAFT: 'draft',
};

const StatusBadge = ({ children, variant }) => (
  <div className={cn('status-badge', `status-badge__background--${variant}`)}>
    <div
      className={cn(`status-badge__circle`, `status-badge__circle--${variant}`)}
    />
    <span
      className={(`status-badge__label`, `status-badge__label--${variant}`)}
    >
      {children}
    </span>
  </div>
);

StatusBadge.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['paid', 'pending', 'draft']).isRequired,
};

export default StatusBadge;
