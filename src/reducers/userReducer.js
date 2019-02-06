import { SIGNUP_USER, SET_AUTH_USER, REMOVE_AUTH_USER } from '../actions/actionTypes';

const userDefaultState = {
  isAuthenticated: false,
};

const userReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...action.payload,
      };
    case SET_AUTH_USER:
      return {
        ...action.payload,
      };
    case REMOVE_AUTH_USER:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
