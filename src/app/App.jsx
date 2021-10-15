import { hot } from 'react-hot-loader/root';
import React from 'react';
import './App.scss';

const App = () => {
  const message = 'React wpp';
  return (
    <div className="app">
      <h1>{message}</h1>
    </div>
  );
};
export default hot(App);
