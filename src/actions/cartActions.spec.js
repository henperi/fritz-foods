/* eslint-disable no-undef */
import {
  addToCart,
  setCurrentCart,
  removeFromCart,
  updateCartQty,
  toggleCartSlider,
  emptyCart,
} from './cartActions';

describe('The cartActions Test Suite', () => {
  it('should setup addToCart action object', () => {
    const payload = {
      id: 5,
      name: 'Rice',
      price: 500,
    };
    const action = addToCart(payload.id, payload.name, payload.price);

    expect(action).toEqual({
      type: 'ADD_TO_CART',
      ...payload,
    });
  });

  it('should setup setCurrentCart action object', () => {
    const payload = {
      id: 5,
      name: 'Rice',
      price: 500,
    };
    const action = setCurrentCart(payload);
    expect(action).toEqual({
      type: 'SET_CURRENT_CART',
      payload,
    });
  });

  it('should setup removeFromCart action object', () => {
    const id = 5;
    const action = removeFromCart(id);

    expect(action).toEqual({
      type: 'REMOVE_FROM_CART',
      id,
    });
  });

  it('should setup updateCartQty action object', () => {
    const id = 5;
    const updates = { qty: 5 };
    const action = updateCartQty(id, updates);

    expect(action).toEqual({
      type: 'UPDATE_CART_ITEM_QUANTITY',
      id,
      updates,
    });
  });

  it('should setup toggleCartSlider action object', () => {
    const action = toggleCartSlider();

    expect(action).toEqual({
      type: 'TOGGLE_CART_SLIDER',
    });
  });

  it('should setup emptyCart action object', () => {
    const action = emptyCart();

    expect(action).toEqual({
      type: 'EMPTY_CART',
    });
  });
});
