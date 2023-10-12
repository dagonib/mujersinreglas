import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
// Screens
import CustomerScreen from './screens/customer/CustomerScreen';
import AccountScreen from './screens/account/AccountScreen';
import AdminScreen from './screens/admin/AdminScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<CustomerScreen />} exact />
        <Route path="/account/*" element={<AccountScreen />} />
        <Route path="/admin/*" element={<AdminScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
