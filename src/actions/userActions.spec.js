/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import mockData from '../__mocks__/userMock';
import { setAuthUser, logoutUser } from './userActions';
import baseApi from '../constants';
import { SET_ERRORS } from './actionTypes';
// import { SET_AUTH_USER } from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('The user actions Test Suite', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should setup setAuthUser action object', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjRmNTA2MC0yOWVlLTExZTktOTNjMC04ZDdiZjBiYTc1ODgiLCJlbWFpbCI6InBpZW5yeTRnQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiZnVsbG5hbWUiOiJIZW5yeSIsImlhdCI6MTU0OTU5MTEyMCwiZXhwIjoxNTQ5Njc3NTIwfQ.AYkjS-jN3K3vf_UeLSoTaLRDpgo-mU3c5GZPxnYlHXw';
    const action = setAuthUser(token);

    expect(action).toEqual({
      type: 'SET_AUTH_USER',
      payload: {
        email: 'pienry4g@gmail.com',
        exp: 1549677520,
        fullname: 'Henry',
        iat: 1549591120,
        role: 'User',
        userId: '664f5060-29ee-11e9-93c0-8d7bf0ba7588',
      },
    });
  });

  it('should setup logoutUser action object', () => {
    const action = logoutUser();

    expect(action).toEqual({ type: 'REMOVE_AUTH_USER' });
  });

  it('should dispatch the setAuth action when loginUser action is succesful', async (done) => {
    moxios.stubRequest(`${baseApi}/api/v1/auth/login`, {
      status: 200,
      response: {
        data: mockData.loginResponse,
      },
    });
    const expectedResult = [
      {
        payload: {
          email: 'pienry4g@gmail.com',
          exp: 1549677520,
          fullname: 'Henry',
          iat: 1549591120,
          role: 'User',
          userId: '664f5060-29ee-11e9-93c0-8d7bf0ba7588',
        },
        type: 'SET_AUTH_USER',
      },
    ];
    await store.dispatch(setAuthUser(mockData.loginResponse.userToken));
    expect(store.getActions()).toEqual(expectedResult);
    done();
  });

  it('should dispatch the setError action when loginUser action is unsuccesful', async (done) => {
    moxios.stubRequest(`${baseApi}/api/v1/auth/login`, {
      status: 400,
      errors: {
        response: {
          data: mockData.badResponse,
        },
      },
    });
    const expectedResult = [
      {
        payload: {
          email: 'pienry4g@gmail.com',
          exp: 1549677520,
          fullname: 'Henry',
          iat: 1549591120,
          role: 'User',
          userId: '664f5060-29ee-11e9-93c0-8d7bf0ba7588',
        },
        type: 'SET_AUTH_USER',
      },
      { payload: [{ errors: 'Bad request' }], type: 'SET_ERRORS' },
    ];

    await store.dispatch({
      type: SET_ERRORS,
      payload: [{ errors: 'Bad request' }],
    });
    expect(store.getActions()).toEqual(expectedResult);
    done();
  });
});
