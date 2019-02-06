/* eslint-disable no-case-declarations */
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOGGLE_CART_SLIDER,
  UPDATE_CART_ITEM_QUANTITY,
  EMPTY_CART,
  SET_CURRENT_CART,
} from '../actions/actionTypes';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_CART:
      return [...action.payload];

    case ADD_TO_CART:
      const cartItem = state.find(item => item.foodId === action.id);
      if (!cartItem) {
        localStorage.setItem(
          'foodItems',
          JSON.stringify([
            ...state,
            {
              foodId: action.id,
              quantity: 1,
              name: action.name,
              unitPrice: action.price,
            },
          ]),
        );
        return [
          ...state,
          {
            foodId: action.id,
            quantity: 1,
            name: action.name,
            unitPrice: action.price,
          },
        ];
      }

      let newState = state.map((item) => {
        if (item.foodId !== action.id) {
          return item;
        }
        return { ...item, quantity: item.quantity + 1 };
      });
      localStorage.setItem('foodItems', JSON.stringify(newState));
      return newState;

    case REMOVE_FROM_CART:
      newState = state.filter(item => item.foodId !== action.id);
      localStorage.setItem('foodItems', JSON.stringify(newState));
      return newState;

    case TOGGLE_CART_SLIDER:
      return state;

    case UPDATE_CART_ITEM_QUANTITY:
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, ...action.updates };
        }
        return item;
      });

    case EMPTY_CART:
      return [];

    default:
      return state;
  }
};

export default cartReducer;
