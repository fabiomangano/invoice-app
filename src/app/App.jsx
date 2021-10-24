import { hot } from 'react-hot-loader/root';
import React from 'react';
import ThemeProvider from '../components/theme-provider/ThemeProvider';
import AppLayout from '../layouts/AppLayout';
import Home from '../pages/Home';
import './App.scss';

const App = () => (
  <ThemeProvider>
    <div className="app">
      <AppLayout>
        <Home />
      </AppLayout>
    </div>
  </ThemeProvider>
);

export default hot(App);
