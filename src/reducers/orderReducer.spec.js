/* eslint-disable no-undef */
import {
  SET_ORDER_HISTORY,
  SET_ORDERED_ITEMS,
  REMOVE_ONE_ORDER_HISTORY,
} from '../actions/actionTypes';

// Reducer to be tested
import orderReducer from './orderReducer';

describe('orderReducer', () => {
  const initialState = {
    orderHistory: [],
    orderedItems: [],
  };
  it('should return the default state if no action is specified', () => {
    const action = { type: '' };
    expect(orderReducer(initialState, action)).toMatchSnapshot({});
    expect(orderReducer(initialState, action)).toEqual(initialState);
  });

  it('should update the state and set order history when type is SET_ORDER_HISTORY and action is specified', () => {
    const action = {
      type: SET_ORDER_HISTORY,
      payload: [{ id: 5, price: 500 }, { id: 3, price: 700 }],
    };
    expect(orderReducer(initialState, action)).toMatchSnapshot({});
    expect(orderReducer(initialState, action)).toEqual({
      orderHistory: [{ id: 5, price: 500 }, { id: 3, price: 700 }],
      orderedItems: [],
    });
  });

  it('should update the state and set order items when type is SET_ORDERED_ITEMS and action is specified', () => {
    const action = {
      type: SET_ORDERED_ITEMS,
      payload: [{ id: 5, price: 500 }, { id: 3, price: 700 }],
    };
    expect(orderReducer(initialState, action)).toMatchSnapshot({});
    expect(orderReducer(initialState, action)).toEqual({
      orderHistory: [],
      orderedItems: [{ id: 5, price: 500 }, { id: 3, price: 700 }],
    });
  });

  it('should update the state and remove an order history when type is REMOVE_ONE_ORDER_HISTORY and action is specified', () => {
    const action = {
      type: REMOVE_ONE_ORDER_HISTORY,
      id: 5,
    };
    expect(orderReducer(initialState, action)).toMatchSnapshot({});
    expect(orderReducer(initialState, action)).toEqual({ orderHistory: [], orderedItems: [] });
  });
});
