import React from 'react';
import { Context } from '../FilterableList';
import './Counter.style.scss';

const Counter = () => {
  const { data } = React.useContext(Context);
  return (
    <div className="counter">
      <span className="counter__label">Invoices</span>
      <span className="counter__count">{data.length} Invoices</span>
    </div>
  );
};

export default Counter;
