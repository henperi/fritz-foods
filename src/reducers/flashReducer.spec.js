/* eslint-disable no-undef */
import flashReducer, { initialState } from './flashReducer';

describe('flashReducer', () => {
  // const initialState = [];
  it('should return the default state if no action is specified', () => {
    const action = { type: '' };
    expect(flashReducer(initialState, action)).toMatchSnapshot({});
    expect(flashReducer(initialState, action)).toEqual({
      flashType: 'success',
      message: '',
      showFlash: false,
      title: '',
    });
  });

  it('should update the state and SHOW_FLASH when type is SET_MENU and payload is specified', () => {
    const action = {
      type: 'SHOW_FLASH',
      payload: {
        flashType: 'success',
        message: 'new message',
        showFlash: true,
        title: 'new title',
      },
    };
    expect(flashReducer(initialState, action)).toMatchSnapshot({});
    expect(flashReducer(initialState, action)).toEqual({
      flashType: 'success',
      message: 'new message',
      showFlash: true,
      title: 'new title',
    });
  });

  it('should update the state and REMOVE_FLASH when type is SET_MENU and payload is specified', () => {
    const action = {
      type: 'REMOVE_FLASH',
    };
    expect(flashReducer(initialState, action)).toMatchSnapshot({});
    expect(flashReducer(initialState, action)).toEqual({ showFlash: false });
  });
});
