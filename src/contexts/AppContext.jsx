import React from 'react';

const AppContext = React.createContext({ invoices: [], addInvoice: () => {} });

export default AppContext;
