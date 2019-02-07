/* eslint-disable no-undef */
import { SET_FEATURED_MENU } from '../actions/actionTypes';
import featuredMenuenuReducers from './featuredMenuReducer';

describe('featuredMenuenuReducers', () => {
  const initialState = [];
  it('should return the default state if no action is specified', () => {
    const action = { type: '' };
    expect(featuredMenuenuReducers(initialState, action)).toMatchSnapshot({});
    expect(featuredMenuenuReducers(initialState, action)).toEqual(initialState);
  });

  it('should update the state and SET_MENU when type is SET_MENU and payload is specified', () => {
    const action = {
      type: SET_FEATURED_MENU,
      payload: [{ food_id: 5, name: 500 }, { food_id: 6, name: 'Beans' }],
    };
    expect(featuredMenuenuReducers(initialState, action)).toMatchSnapshot({});
    expect(featuredMenuenuReducers(initialState, action)).toEqual([
      { food_id: 5, name: 500 },
      { food_id: 6, name: 'Beans' },
    ]);
  });
});
