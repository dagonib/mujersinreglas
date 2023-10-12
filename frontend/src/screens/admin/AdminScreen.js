import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Sidebar from './components/Sidebar';

// Screens
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import EventListScreen from './screens/EventListScreen';
import EventEditScreen from './screens/EventEditScreen';
import OrderScreen from './screens/OrderScreen';
import DashboardScreen from './screens/DashboardScreen';
import InvoicePrintScreen from './screens/InvoicePrintScreen';
import OrderNotPaidListScreen from './screens/OrderNotPaidListScreen';

const AdminScreen = () => {
  return (
    <>
      <main className="admin">
        <Sidebar />
        <div className="admin-content">
          <Routes>
            <Route path="/dashboard" element={<DashboardScreen />}></Route>
            <Route path="userlist" element={<UserListScreen />}></Route>
            <Route path="profile" element={<ProfileScreen />}></Route>
            <Route
              path="user/:userId/edit"
              element={<UserEditScreen />}
            ></Route>
            <Route path="productlist" element={<ProductListScreen />}></Route>
            <Route
              path="product/:productId/edit"
              element={<ProductEditScreen />}
            ></Route>
            <Route path="orderlist" element={<OrderListScreen />}></Route>

            <Route
              path="ordernotpaidlist"
              element={<OrderNotPaidListScreen />}
            ></Route>
            <Route path="order/:orderId" element={<OrderScreen />}></Route>
            <Route path="eventlist" element={<EventListScreen />}></Route>
            <Route
              path="event/:eventId/edit"
              element={<EventEditScreen />}
            ></Route>
            <Route
              path="invoice/:orderId"
              element={<InvoicePrintScreen />}
            ></Route>
          </Routes>
        </div>
      </main>
    </>
  );
};

export default AdminScreen;
