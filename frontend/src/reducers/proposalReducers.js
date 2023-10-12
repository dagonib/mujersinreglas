import {
  PROPOSAL_LIST_FAIL,
  PROPOSAL_LIST_REQUEST,
  PROPOSAL_LIST_SUCCESS,
} from '../constants/proposalConstant';

export const proposalListReducer = (state = { proposal: [] }, action) => {
  switch (action.type) {
    case PROPOSAL_LIST_REQUEST:
      return { loading: true, proposals: [] };
    case PROPOSAL_LIST_SUCCESS:
      return { loading: false, proposals: action.payload };
    case PROPOSAL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
