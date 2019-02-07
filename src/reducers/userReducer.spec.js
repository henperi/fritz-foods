/* eslint-disable no-undef */
import { SIGNUP_USER, SET_AUTH_USER, REMOVE_AUTH_USER } from '../actions/actionTypes';

// Reducer to be tested
import userReducer from './userReducer';

describe('userReducer', () => {
  const initialState = {
    isAuthenticated: false,
  };
  it('should return the default state if no action is specified', () => {
    const action = { type: '' };
    expect(userReducer(initialState, action)).toMatchSnapshot({});
    expect(userReducer(initialState, action)).toEqual(initialState);
  });

  // it('should update the state and set order history when type is SET_ORDER_HISTORY and action is specified', () => {
  //   const action = {
  //     type: SET_ORDER_HISTORY,
  //     payload: [{ id: 5, price: 500 }, { id: 3, price: 700 }],
  //   };
  //   expect(userReducer(initialState, action)).toMatchSnapshot({});
  //   expect(userReducer(initialState, action)).toEqual({
  //     orderHistory: [{ id: 5, price: 500 }, { id: 3, price: 700 }],
  //     orderedItems: [],
  //   });
  // });

  // it('should update the state and set order items when type is SET_ORDERED_ITEMS and action is specified', () => {
  //   const action = {
  //     type: SET_ORDERED_ITEMS,
  //     payload: [{ id: 5, price: 500 }, { id: 3, price: 700 }],
  //   };
  //   expect(userReducer(initialState, action)).toMatchSnapshot({});
  //   expect(userReducer(initialState, action)).toEqual({
  //     orderHistory: [],
  //     orderedItems: [{ id: 5, price: 500 }, { id: 3, price: 700 }],
  //   });
  // });

  // it('should update the state and remove an order history when type is REMOVE_ONE_ORDER_HISTORY and action is specified', () => {
  //   const action = {
  //     type: REMOVE_ONE_ORDER_HISTORY,
  //     id: 5,
  //   };
  //   expect(userReducer(initialState, action)).toMatchSnapshot({});
  //   expect(userReducer(initialState, action)).toEqual({ orderHistory: [], orderedItems: [] });
  // });
});
