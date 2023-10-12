import {
  PAYMENT_STRIPE_FAIL,
  PAYMENT_STRIPE_REQUEST,
  PAYMENT_STRIPE_SUCCESS,
} from '../constants/paymentConstants';

export const paymentStripeReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_STRIPE_REQUEST:
      return {
        loading: true,
      };
    case PAYMENT_STRIPE_SUCCESS:
      return {
        loading: false,
        success: true,
        payment: action.payload,
      };
    case PAYMENT_STRIPE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
