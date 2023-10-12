import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Screens
import LoginScreen from './screens/LoginScreen';

const AccountScreen = () => {
  return (
    <main className="main-account">
      <Routes>
        <Route path="/login" element={<LoginScreen />}></Route>
      </Routes>
    </main>
  );
};

export default AccountScreen;
