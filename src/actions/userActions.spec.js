/* eslint-disable no-undef */
import { setAuthUser, logoutUser } from './userActions';

describe('The user actions Test Suite', () => {
  it('should setup setAuthUser action object', () => {
    const payload = {
      id: 5,
      username: 'henry',
    };
    const action = setAuthUser(payload);

    expect(action).toEqual({
      type: 'SET_AUTH_USER',
      payload,
    });
  });

  it('should setup logoutUser action object', () => {
    const action = logoutUser();

    expect(action).toEqual({
      type: 'REMOVE_AUTH_USER',
      payload: {
        isAuthenticated: false,
      },
    });
  });
});
