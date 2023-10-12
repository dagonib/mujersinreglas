import {
  INVOICE_CREATE_REQUEST,
  INVOICE_CREATE_SUCCESS,
  INVOICE_CREATE_FAIL,
  INVOICE_LIST_REQUEST,
  INVOICE_LIST_SUCCESS,
  INVOICE_LIST_FAIL,
} from '../constants/invoiceConstants';

export const invoiceListReducer = (state = { invoices: [] }, action) => {
  switch (action.type) {
    case INVOICE_LIST_REQUEST:
      return { loading: true, invoices: [] };
    case INVOICE_LIST_SUCCESS:
      return { loading: false, invoices: action.payload };
    case INVOICE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const invoiceCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case INVOICE_CREATE_REQUEST:
      return { loading: true };
    case INVOICE_CREATE_SUCCESS:
      return { loading: false, success: true, invoice: action.payload };
    case INVOICE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
