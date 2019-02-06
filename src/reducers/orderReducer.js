import { SET_ORDER_HISTORY, SET_ORDERED_ITEMS } from '../actions/actionTypes';

const initialState = {
  orderHistory: [],
  orderedItems: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_HISTORY:
      return {
        ...state,
        orderHistory: [...action.payload],
      };

    case SET_ORDERED_ITEMS:
      return {
        ...state,
        orderedItems: [...action.payload],
      };

    default:
      return state;
  }
};

export default orderReducer;
