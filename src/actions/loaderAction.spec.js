/* eslint-disable no-undef */
import toggleLoader from './loaderAction';

describe('The flashActions Test Suite', () => {
  it('should setup removeFlash action object', () => {
    const action = toggleLoader();

    expect(action).toEqual({ type: 'TOGGLE_LOADER' });
  });
});
