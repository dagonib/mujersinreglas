import axios from 'axios';
import {
  INVOICE_CREATE_FAIL,
  INVOICE_CREATE_REQUEST,
  INVOICE_CREATE_SUCCESS,
  INVOICE_LIST_FAIL,
  INVOICE_LIST_REQUEST,
  INVOICE_LIST_SUCCESS,
} from '../constants/invoiceConstants';

// LIST INVOICE
export const listInvoices = () => async (dispatch) => {
  try {
    dispatch({ type: INVOICE_LIST_REQUEST });

    const { data } = await axios.get('/api/invoices');

    dispatch({
      type: INVOICE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INVOICE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// CREATE INVOICE
export const createInvoice = () => async (dispatch) => {
  try {
    dispatch({
      type: INVOICE_CREATE_REQUEST,
    });

    const { data } = await axios.post('/api/invoices');

    dispatch({
      type: INVOICE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INVOICE_CREATE_FAIL,
      payload:
        error.message && error.message.data.message
          ? error.message.data.message
          : error.message,
    });
  }
};
