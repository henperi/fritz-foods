import { SET_ERRORS } from '../actions/actionTypes';

const errorReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ERRORS:
      return [...action.payload];

    default:
      return state;
  }
};

export default errorReducer;
