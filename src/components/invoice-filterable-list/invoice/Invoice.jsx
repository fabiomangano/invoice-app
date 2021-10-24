import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import StatusBadge, { STATUS } from '../../status-badge/StatusBadge';
import './Invoice.style.scss';

const Invoice = ({ invoice }) => {
  let variant;

  switch (invoice.status) {
    case STATUS.PENDING:
      variant = 'pending';
      break;
    case STATUS.DRAFT:
      variant = 'draft';
      break;
    case STATUS.PAID:
      variant = 'paid';
      break;
    default:
      break;
  }

  return (
    <div className="invoice">
      <span className={cn('invoice__id', 'invoice__label--primary')}>
        {invoice.id}
      </span>
      <span className={cn('invoice__customer', 'invoice__label--secondary')}>
        {invoice.customer}
      </span>
      <span className={cn('invoice__label--secondary invoice__date')}>
        {invoice.date}
      </span>
      <span className={cn('invoice__label--primary', 'invoice__amount')}>
        $ {invoice.amount}
      </span>
      <span className="invoice__status">
        <StatusBadge variant={variant}>{variant}</StatusBadge>
      </span>
    </div>
  );
};

Invoice.propTypes = {
  invoice: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      customer: PropTypes.string,
      date: PropTypes.string,
      status: PropTypes.string,
    }),
  ).isRequired,
};

export default Invoice;
