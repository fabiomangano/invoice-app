import React from 'react';
import FilterableList from '../components/invoice-filterable-list/FilterableList';
import invoices from '../../db';
import './Home.style.scss';

const Home = () => (
  <div className="home">
    <FilterableList data={invoices}>
      <FilterableList.Header>
        <FilterableList.Counter />
        <FilterableList.ActionGroup>
          <FilterableList.Filter />
          <FilterableList.AddButton>Add</FilterableList.AddButton>
        </FilterableList.ActionGroup>
      </FilterableList.Header>
      <FilterableList.List />
    </FilterableList>
  </div>
);

export default Home;
