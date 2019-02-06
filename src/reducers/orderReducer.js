import {
  SET_ORDER_HISTORY,
  SET_ORDERED_ITEMS,
  REMOVE_ONE_ORDER_HISTORY,
} from '../actions/actionTypes';

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

    case REMOVE_ONE_ORDER_HISTORY:
      return {
        ...state,
        orderHistory: state.orderHistory.filter(item => item.order_id !== action.id),
      };

    default:
      return state;
  }
};

export default orderReducer;
