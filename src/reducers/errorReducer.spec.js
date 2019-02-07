/* eslint-disable no-undef */
import { SET_ERRORS } from '../actions/actionTypes';

// Reducer to be tested
import errorReducer from './errorReducer';

describe('errorReducer', () => {
  const initialState = [];
  it('should return the default state if no action is specified', () => {
    const action = { type: '' };
    expect(errorReducer(initialState, action)).toMatchSnapshot({});
    expect(errorReducer(initialState, action)).toEqual(initialState);
  });

  it('should update the state and set setErrors when type is SET_ERRORS and action is specified', () => {
    const action = {
      type: SET_ERRORS,
      payload: [{ name: 'invalid name', password: 'invalid password' }],
    };
    expect(errorReducer(initialState, action)).toMatchSnapshot({});
    expect(errorReducer(initialState, action)).toEqual([
      { name: 'invalid name', password: 'invalid password' },
    ]);
  });
});
