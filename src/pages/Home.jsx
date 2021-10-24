import React from 'react';
import FilterableList from '../components/invoice-filterable-list/FilterableList';
import Button from '../components/button/Button';
import { ReactComponent as IconPlus } from '../assets/icon-plus.svg';
import invoices from '../../db';
import './Home.style.scss';

const Home = () => (
  <div className="home">
    <FilterableList data={invoices}>
      <FilterableList.Header>
        <FilterableList.Counter />
        <FilterableList.ActionGroup>
          <FilterableList.Filter />
          <Button variant="primary">
            <IconPlus />
            Add
          </Button>
        </FilterableList.ActionGroup>
      </FilterableList.Header>
      <FilterableList.List />
    </FilterableList>
  </div>
);

export default Home;
