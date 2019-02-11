import JWT from 'jsonwebtoken';
import axiosInstance, { setAxiosToken } from '../utils/axiosInstance';
import { SET_ERRORS, SET_AUTH_USER, REMOVE_AUTH_USER } from './actionTypes';
import { removeFlash, showFlash } from './flashActions';

export const setAuthUser = (token) => {
  const decodedToken = JWT.decode(token);
  localStorage.setItem('userToken', token);
  setAxiosToken(token);

  return {
    type: SET_AUTH_USER,
    payload: decodedToken,
  };
};

export const logoutUser = () => {
  localStorage.removeItem('userToken');
  // localStorage.removeItem('userId');
  // localStorage.removeItem('fullname');
  // localStorage.removeItem('role');

  // return {
  //   type: REMOVE_AUTH_USER,
  //   payload: {
  //     isAuthenticated: false,
  //   },
  // };

  return {
    type: REMOVE_AUTH_USER,
  };
};

const signupUrl = '/auth/signup';
const loginUrl = '/auth/login';

export const signupUser = (userData = {}, history, toggleLoader) => (dispatch) => {
  axiosInstance
    .post(signupUrl, userData)
    .then((response) => {
      const { data } = response;
      const { userToken } = data;

      dispatch(setAuthUser(userToken));

      const flashData = {
        title: 'Signup was successful',
        message: 'Welcome to Fast Food Fast',
        flashType: 'flash-success',
      };
      dispatch(showFlash(flashData));
      setTimeout(() => dispatch(removeFlash()), 2000);
      toggleLoader();

      return history.push('/users/foods');
    })
    .catch((errors) => {
      const { response = {}, request } = errors;
      toggleLoader();

      if (response.data) {
        return dispatch({
          type: SET_ERRORS,
          payload: [...response.data.errors],
        });
      }

      return dispatch({
        type: SET_ERRORS,
        payload: [{ msg: 'An unknown error occurred, Please check your network and try again' }],
      });
    });
};

export const loginUser = (userData = {}, history, toggleLoader) => (dispatch) => {
  axiosInstance
    .post(loginUrl, userData)
    .then((response) => {
      const { data } = response;
      const { userToken } = data;

      const flashData = {
        title: 'Login success',
        message: 'You have logged in successfully',
        flashType: 'flash-success',
      };
      dispatch(showFlash(flashData));
      setTimeout(() => dispatch(removeFlash()), 2000);
      toggleLoader();
      dispatch(setAuthUser(userToken));

      return history.push('/users/foods');
    })
    .catch((errors) => {
      const { response = {}, request } = errors;

      toggleLoader();
      if (response.data) {
        return dispatch({
          type: SET_ERRORS,
          payload: [...response.data.errors],
        });
      }

      return dispatch({
        type: SET_ERRORS,
        payload: [{ msg: 'An unknown error occurred, Please check your network and try again' }],
      });
    });
};
