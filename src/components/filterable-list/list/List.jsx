import React from 'react';
import { Context } from '../FilterableList';
import Invoice from '../invoice/Invoice';
import './List.style.scss';

const List = () => {
  const { data } = React.useContext(Context);
  return (
    <ul>
      {data.map((invoice) => (
        <li className="list list__item" key={invoice.id}>
          <Invoice invoice={invoice} />
        </li>
      ))}
    </ul>
  );
};

export default List;
