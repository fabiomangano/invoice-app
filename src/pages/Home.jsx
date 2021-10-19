import React from 'react';
import StatusBadge from '../components/status-badge/StatusBadge';
import './Home.style.scss';

const Home = () => (
  <div className="home">
    <StatusBadge variant="paid">pending</StatusBadge>
  </div>
);

export default Home;
