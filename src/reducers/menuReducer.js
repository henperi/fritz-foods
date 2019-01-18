import { GET_MENU } from '../actions/actionTypes';

const menuDefaultState = [];

const userReducer = (state = menuDefaultState, action) => {
  switch (action.type) {
    case GET_MENU:
      return { ...action.payload };

    default:
      return state;
  }
};

export default userReducer;
