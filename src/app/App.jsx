import { hot } from 'react-hot-loader/root';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { mobile } from '../mediaQueries';
import ThemeProvider from '../components/theme-provider/ThemeProvider';
import AppLayout from '../layouts/AppLayout';
import Home from '../pages/Home';
import './App.scss';

const App = () => {
  const isMobile = useMediaQuery(mobile);
  return (
    <ThemeProvider>
      <div className="app">
        <AppLayout isMobile={isMobile}>
          <Home />
        </AppLayout>
      </div>
    </ThemeProvider>
  );
};
export default hot(App);
