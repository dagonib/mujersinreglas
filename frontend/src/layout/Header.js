import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Header</h1>
      <Outlet />
    </header>
  );
};

export default Header;
