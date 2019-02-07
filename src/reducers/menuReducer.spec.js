/* eslint-disable no-undef */
import menuReducers from './menuReducer';

describe('menuReducers', () => {
  const initialState = [];
  it('should return the default state if no action is specified', () => {
    const action = { type: '' };
    expect(menuReducers(initialState, action)).toMatchSnapshot({});
    expect(menuReducers(initialState, action)).toEqual(initialState);
  });

  it('should update the state and SET_MENU when type is SET_MENU and payload is specified', () => {
    const action = {
      type: 'SET_MENU',
      payload: [{ food_id: 5, name: 500 }],
    };
    expect(menuReducers(initialState, action)).toMatchSnapshot({});
    expect(menuReducers(initialState, action)).toEqual({ 0: { food_id: 5, name: 500 } });
  });
});
