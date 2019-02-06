import {
  ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART_SLIDER, SET_CURRENT_CART,
} from './actionTypes';

export const setCurrentCart = payload => ({
  type: SET_CURRENT_CART,
  payload,
});

export const addToCart = (id, name, price) => ({
  type: ADD_TO_CART,
  id,
  name,
  price,
});

export const removeFromCart = id => ({ type: REMOVE_FROM_CART, id });

export const updateCartQty = (id, updates) => ({
  type: 'UPDATE_CART_ITEM_QUANTITY',
  updates,
  id,
});

export const emptyCart = () => {
  localStorage.removeItem('foodItems');
  return { type: 'EMPTY_CART' };
};

export const toggleCartSlider = () => ({ type: TOGGLE_CART_SLIDER });
