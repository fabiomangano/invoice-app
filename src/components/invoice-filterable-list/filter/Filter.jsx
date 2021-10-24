import React from 'react';
import { Context } from '../FilterableList';
import './Filter.style.scss';

const Filter = () => {
  const { filter, setCurrentFilter, statusFilters } = React.useContext(Context);

  const handleChange = (event) => setCurrentFilter(event.target.value);

  return (
    <select value={filter} onChange={handleChange}>
      {Object.values(statusFilters).map((curFilter) => (
        <option key={curFilter}>{curFilter}</option>
      ))}
    </select>
  );
};

export default Filter;
