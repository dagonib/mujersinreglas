import axios from 'axios';

import {
  PAYMENT_STRIPE_FAIL,
  PAYMENT_STRIPE_REQUEST,
  PAYMENT_STRIPE_SUCCESS,
} from '../constants/paymentConstants';

export const checkoutStripe = (orderId) => async (dispatch) => {
  try {
    dispatch({
      type: PAYMENT_STRIPE_REQUEST,
    });

    const { data } = await axios.post(`/api/payments`, { orderId });

    dispatch({
      type: PAYMENT_STRIPE_SUCCESS,
      payload: data,
    });
    window.location.href = data.url;
  } catch (error) {
    dispatch({
      type: PAYMENT_STRIPE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
