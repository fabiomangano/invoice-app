import React from 'react';
import { Context } from '../FilterableList';
import Invoice from '../invoice/Invoice';
import './List.style.scss';

const List = () => {
  const { data } = React.useContext(Context);
  return (
    <ul>
      {data.length > 0 ? (
        data.map((invoice) => (
          <li className="list list__item" key={invoice.id}>
            <Invoice invoice={invoice} />
          </li>
        ))
      ) : (
        <span className="list list__empty">No invoices</span>
      )}
    </ul>
  );
};

export default List;
