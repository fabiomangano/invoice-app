import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Space from '../components/space/Space';
import { mobile } from '../mediaQueries';
import FilterableList from '../components/invoice-filterable-list/FilterableList';
import invoices from '../../db';
import './Home.style.scss';

const Home = () => {
  const isMobile = useMediaQuery(mobile);
  return (
    <div className="home">
      {isMobile ? <Space direction="horizontal" space={2} /> : null}
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
};

export default Home;
