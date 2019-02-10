/* eslint-disable no-undef */
import slideCartReducers, { initialState } from './slideCartReducer';

describe('slideCartReducers', () => {
  it('should return the default state if no action is specified', () => {
    const action = { type: '' };
    expect(slideCartReducers(initialState, action)).toMatchSnapshot({});
    expect(slideCartReducers(initialState, action)).toEqual(initialState);
  });

  it('should set the slideCart state to true when type is SLIDE_CART and payload is specified', () => {
    const action = {
      type: 'SLIDE_CART',
    };
    expect(slideCartReducers(initialState, action)).toMatchSnapshot({});
    expect(slideCartReducers(initialState, action)).toEqual({ slide: true });
  });
});
