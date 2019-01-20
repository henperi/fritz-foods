import { GET_MENU } from '../actions/actionTypes';

const menuDefaultState = [];

const menuReducer = (state = menuDefaultState, action) => {
  switch (action.type) {
    case GET_MENU:
      return { ...action.payload };

    default:
      return state;
  }
};

export default menuReducer;
