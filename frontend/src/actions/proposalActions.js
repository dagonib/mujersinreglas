import axios from 'axios';
import {
  PROPOSAL_LIST_FAIL,
  PROPOSAL_LIST_REQUEST,
  PROPOSAL_LIST_SUCCESS,
} from '../constants/proposalConstant';

export const listProposals = () => async (dispatch) => {
  try {
    dispatch({ type: PROPOSAL_LIST_REQUEST });
    const { data } = await axios.get('/api/proposals');
    dispatch({
      type: PROPOSAL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROPOSAL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
