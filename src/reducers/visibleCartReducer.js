/* eslint-disable no-case-declarations */
import { SET_VISIBLE_CART_ITEMS } from '../actions/actionTypes';

const visibleCartReducer = (state = [], action) => {
  switch (action.type) {
    case SET_VISIBLE_CART_ITEMS:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default visibleCartReducer;
