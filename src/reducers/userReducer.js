import { SIGNUP_USER, SET_AUTH_USER, REMOVE_AUTH_USER } from '../actions/actionTypes';

const userDefaultState = {
  userId: undefined,
  userToken: undefined,
  fullname: undefined,
  role: undefined,
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
    case 'SET_USER_TOKEN':
      return {
        ...state,
        userToken: action.userToken,
      };
    case 'REMOVE_USER_TOKEN':
      return {
        userToken: undefined,
      };

    default:
      return state;
  }
};

export default userReducer;
