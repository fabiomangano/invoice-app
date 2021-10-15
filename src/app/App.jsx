import { hot } from 'react-hot-loader/root';
import React from 'react';
import './App.scss';
import CustomButton from '../components/custom-button/CustomButton';

const App = () => {
  const message = 'React wpp';
  return (
    <div className="app">
      <CustomButton onClick={() => 2 * 2} variant="primary" size="medium">
        {message}
      </CustomButton>
    </div>
  );
};
export default hot(App);
