/* eslint-disable no-undef */
import { showFlash, removeFlash } from './flashActions';

describe('The flashActions Test Suite', () => {
  it('should setup showFlash action object', () => {
    const payload = {
      flashType: 'success',
      message: 'new message',
      showFlash: true,
      title: 'new title',
    };
    const action = showFlash(payload);

    expect(action).toEqual({
      payload: { flashType: 'success', message: 'new message', title: 'new title' },
      type: 'SHOW_FLASH',
    });
  });

  it('should setup removeFlash action object', () => {
    const action = removeFlash();

    expect(action).toEqual({ type: 'REMOVE_FLASH' });
  });
});
