/* eslint-disable no-case-declarations */
import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART_SLIDER } from '../actions/actionTypes';

const cartDefaultState = localStorage.foodItems ? JSON.parse(localStorage.foodItems) : [];

const cartReducer = (state = cartDefaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const cartItem = state.find(item => item.foodId === action.id);

      if (!cartItem) {
        localStorage.setItem(
          'foodItems',
          JSON.stringify([...state, { foodId: action.id, quantity: 1 }]),
        );
        return [...state, { foodId: action.id, quantity: 1 }];
      }

      return state.map((item) => {
        if (item.foodId !== action.id) {
          localStorage.setItem(
            'foodItems',
            JSON.stringify(JSON.parse(localStorage.foodItems).push(item)),
          );
          return item;
        }
        // localStorage.setItem('foodItems', JSON.stringify(cartDefaultState));
        // console.log(cartDefaultState);
        return Object.assign({}, item, { quantity: item.quantity + 1 });
        // return item.foodId !== action.id
        //   ? item
        //   : Object.assign({}, item, { quantity: item.quantity + 1 });
      });

    case REMOVE_FROM_CART:
      return state.filter(({ id }) => id !== action.id);

    case TOGGLE_CART_SLIDER:
      alert('CART::');
      return state;

    case 'UPDATE_CART_ITEM_QUANTITY':
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, ...action.updates };
        }
        return item;
      });

    case 'EMPTY_CART':
      return [];

    default:
      return state;
  }
};

export default cartReducer;
