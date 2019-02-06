import { SET_MENU } from '../actions/actionTypes';

const menuDefaultState = [];

const menuReducer = (state = menuDefaultState, action) => {
  switch (action.type) {
    case SET_MENU:
      return { ...action.payload };

    default:
      return state;
  }
};

export default menuReducer;
