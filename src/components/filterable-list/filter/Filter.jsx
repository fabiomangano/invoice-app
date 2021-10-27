import React from 'react';
import { Context } from '../FilterableList';
import './Filter.style.scss';

const Filter = () => {
  const { filter, setCurrentFilter, statusFilters } = React.useContext(Context);

  const handleChange = (event) => setCurrentFilter(event.target.value);

  return (
    <div>
      <span className="filterable-list__label">Filter: </span>
      <select value={filter} onChange={handleChange}>
        {Object.values(statusFilters).map((curFilter) => (
          <option key={curFilter}>{curFilter}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
