import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { mobile } from '../mediaQueries';
import AppContext from '../contexts/AppContext';
import Space from '../components/space/Space';
import FilterableList from '../components/filterable-list/FilterableList';
import './Home.style.scss';

const Home = () => {
  const invoices = React.useContext(AppContext);
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
