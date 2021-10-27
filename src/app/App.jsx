import { hot } from 'react-hot-loader/root';
import React from 'react';
import AppContext from '../contexts/AppContext';
import ThemeProvider from '../components/theme-provider/ThemeProvider';
import AppLayout from '../layouts/AppLayout';
import Home from '../pages/Home';
import invoices from '../../db';
import './App.scss';

const App = () => {
  const addInvoice = (invoice) => invoices.push(invoice);
  return (
    <AppContext.Provider value={{ invoices, addInvoice }}>
      <ThemeProvider>
        <div className="app">
          <AppLayout>
            <Home />
          </AppLayout>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default hot(App);
