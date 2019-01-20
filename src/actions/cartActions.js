/* eslint-disable no-loop-func */
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOGGLE_CART_SLIDER,
  FETCH_CART_ITEMS,
  SET_VISIBLE_CART_ITEMS,
} from './actionTypes';

export const addToCart = (id, name, price) => ({
  type: ADD_TO_CART,
  id,
  name,
  price,
});

export const setVisibleCart = item => ({
  type: SET_VISIBLE_CART_ITEMS,
  payload: item,
});

export const removeFromCart = id => ({ type: REMOVE_FROM_CART, id });

export const updateCartQty = (id, updates) => ({
  type: 'UPDATE_CART_ITEM_QUANTITY',
  updates,
  id,
});

export const emptyCart = () => ({ type: 'EMPTY_CART' });

export const toggleCartSlider = () => ({ type: TOGGLE_CART_SLIDER });
