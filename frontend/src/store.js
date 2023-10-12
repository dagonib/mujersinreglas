import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

// REDUCERS
import { cartReducer } from './reducers/cartReducers';
import {
  orderCreateReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListReducer,
  orderPayReducer,
  orderInvoiceReducer,
} from './reducers/orderReducers';
import {
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productStockReducer,
  productUpdateReducer,
} from './reducers/productReducers';
import {
  userListReducer,
  userLoginReducer,
  userDetailsReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers';
import {
  eventCreateReducer,
  eventDeleteReducer,
  eventDetailsReducer,
  eventListReducer,
  eventUpdateReducer,
} from './reducers/eventReducers';
import { proposalListReducer } from './reducers/proposalReducers';
import {
  invoiceListReducer,
  invoiceCreateReducer,
} from './reducers/invoiceReducers';
import { paymentStripeReducer } from './reducers/paymentReducers';

// Reducers
const reducer = combineReducers({
  // USER
  userList: userListReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  // PRODUCT
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productStock: productStockReducer,
  productDelete: productDeleteReducer,
  // CART
  cart: cartReducer,
  // ORDER
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderList: orderListReducer,
  orderDeliver: orderDeliverReducer,
  orderInvoice: orderInvoiceReducer,
  // EVENTS
  eventList: eventListReducer,
  eventDetails: eventDetailsReducer,
  eventCreate: eventCreateReducer,
  eventUpdate: eventUpdateReducer,
  eventDelete: eventDeleteReducer,
  // PROPOSALS
  proposalList: proposalListReducer,
  // INVOICES
  invoiceCreate: invoiceCreateReducer,
  invoiceList: invoiceListReducer,
  // PAYMENTS
  paymentStripe: paymentStripeReducer,
});

// USERINFO
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

// CARTITEMS
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const preloadedState = {
  userLogin: { userInfo: userInfoFromStorage },
  cart: {
    cartItems: cartItemsFromStorage,
  },
};

const store = configureStore({
  reducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
