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

  it('should update the state and set SIGNUP_USER when type is SIGNUP_USER and action is specified', () => {
    const action = {
      type: SIGNUP_USER,
      payload: { user_id: 5, name: 500 },
    };
    expect(userReducer(initialState, action)).toMatchSnapshot({});
    expect(userReducer(initialState, action)).toEqual({ name: 500, user_id: 5 });
  });

  it('should update the state and set SET_AUTH_USER when type is SET_AUTH_USER and action is specified', () => {
    const action = {
      type: SET_AUTH_USER,
      payload: { user_id: 5, name: 500 },
    };
    expect(userReducer(initialState, action)).toMatchSnapshot({});
    expect(userReducer(initialState, action)).toEqual({ name: 500, user_id: 5 });
  });

  it('should update the state and REMOVE_AUTH_USER when type is REMOVE_AUTH_USER and payload is specified', () => {
    const action = {
      type: REMOVE_AUTH_USER,
      payload: 5,
    };
    expect(userReducer(initialState, action)).toMatchSnapshot({});
    expect(userReducer(initialState, action)).toEqual({});
  });
});
