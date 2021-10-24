import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import Counter from './counter/Counter';
import Filter from './filter/Filter';
import List from './list/List';
import ActionGroup from './action-group/ActionGroup';
import './FilterableList.style.scss';

export const Context = React.createContext();

const statusFilters = {
  NONE: 'none',
  PENDING: 'pending',
  PAID: 'paid',
  DRAFT: 'draft',
};

const FilterableList = ({ children, data }) => {
  if (!data) return null;

  const [filter, setFilter] = React.useState(statusFilters.NONE);

  const setCurrentFilter = (filterName) => setFilter(filterName);

  const filteredData =
    filter === statusFilters.NONE
      ? data
      : data.filter((obj) => obj.status === filter);

  return (
    <Context.Provider
      value={{ filter, statusFilters, setCurrentFilter, data: filteredData }}
    >
      <div className="filterable-list">{children}</div>
    </Context.Provider>
  );
};

FilterableList.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

FilterableList.Header = Header;
FilterableList.Counter = Counter;
FilterableList.Filter = Filter;
FilterableList.List = List;
FilterableList.ActionGroup = ActionGroup;

export default FilterableList;
