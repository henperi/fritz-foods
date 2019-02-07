/* eslint-disable no-undef */
import modalReducers from './modalReducers';

describe('modalReducers', () => {
  const initialState = {
    id: undefined,
    isOpen: false,
  };
  it('should return the default state if no action is specified', () => {
    const action = { type: '' };
    expect(modalReducers(initialState, action)).toMatchSnapshot({});
    expect(modalReducers(initialState, action)).toEqual(initialState);
  });

  it('should update the state and SET_MENU when type is SET_MENU and payload is specified', () => {
    const action = {
      type: 'OPEN_MODAL',
      modal: [{ user_id: 5, name: 500 }],
    };
    expect(modalReducers(initialState, action)).toMatchSnapshot({});
    expect(modalReducers(initialState, action)).toEqual({ 0: { name: 500, user_id: 5 } });
  });

  it('should update the state and SET_MENU when type is SET_MENU and payload is specified', () => {
    const action = {
      type: 'CLOSE_MODAL',
      modal: [{ user_id: 5, name: 500 }],
    };
    expect(modalReducers(initialState, action)).toMatchSnapshot({});
    expect(modalReducers(initialState, action)).toEqual({
      id: undefined,
      isOpen: [{ name: 500, user_id: 5 }],
    });
  });
});
