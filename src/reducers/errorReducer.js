import { SET_ERRORS } from '../actions/actionTypes';

const errorDefaultState = [];

const userReducer = (state = errorDefaultState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return [...action.payload];

    default:
      return state;
  }
};

export default userReducer;
