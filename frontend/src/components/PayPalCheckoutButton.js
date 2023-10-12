import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// PayPal
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

// Actions
import {
  getOrderDetails,
  payOrder,
  invoiceOrder,
} from '../actions/orderActions';
import { createInvoice, listInvoices } from '../actions/invoiceActions.js';

// Constants
import { ORDER_PAY_RESET } from '../constants/orderConstants';
import { stockProduct } from '../actions/productActions';

const PayPalCheckoutButton = ({ order }) => {
  // Constants
  const [{ isPending }] = usePayPalScriptReducer();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Global State --> orderPay
  const orderPay = useSelector((state) => state.orderPay);
  const { loading, success } = orderPay;

  // Global state --> invoiceList
  const invoiceList = useSelector((state) => state.invoiceList);
  const {
    loading: invoiceListLoading,
    error: invoiceListError,
    invoices,
  } = invoiceList;

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(createInvoice());
      await dispatch(listInvoices());
    };

    if (success) {
      order.orderItems.map((orderItem) => {
        dispatch(stockProduct(orderItem));
      });

      dispatch({ type: ORDER_PAY_RESET });

      fetchData();

      localStorage.removeItem('cartItems');
      navigate(`/payment-confirmation/${order._id}`);
    }
  }, [success, dispatch]);

  // Function Paypal Payment Result
  const handleApprove = (paymentResult) => {
    dispatch(payOrder(order._id, paymentResult));
  };

  return (
    <>
      {isPending ? <div>Is pending..</div> : null}
      <PayPalButtons
        style={{
          color: 'silver',
          layout: 'vertical',
          height: 48,
          width: 500,
          tagline: false,
          shape: 'pill',
        }}
        createOrder={async (data, actions) => {
          const orderInPaypal = await order;
          return actions.order.create({
            purchase_units: [
              {
                description: orderInPaypal.description,
                amount: {
                  currency_code: 'EUR',
                  value: Number(orderInPaypal.totalPrice),
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const paymentResult = await actions.order.capture();
          handleApprove(paymentResult);
        }}
        onCancel={() => {}}
        onError={(err) => {
          console.log(err);
        }}
      />
    </>
  );
};

export default PayPalCheckoutButton;
