import axios from 'axios';
import { SET_ERRORS, SET_AUTH_USER, REMOVE_AUTH_USER } from './actionTypes';

export const setUserToken = ({ userToken } = {}) => ({ type: 'SET_USER_TOKEN', userToken });

export const setAuthUser = (payload = {}) => ({
  type: SET_AUTH_USER,
  payload,
});

export const logoutUser = () => ({
  type: REMOVE_AUTH_USER,
  payload: {
    isAuthenticated: false,
  },
});

const baseApi = 'http://localhost:5000/api/v1';
const signupUrl = `${baseApi}/auth/signup`;
const loginUrl = `${baseApi}/auth/login`;

export const signupUser = (userData = {}, history) => (dispatch) => {
  // axios
  //   .post(signupUrl, userData)
  fetch(signupUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(userData),
  })
    .then(res => res.json())
    .then((data) => {
      console.log('=============', data, '=============');
      if (data.success) {
        const isAuthenticated = true;
        const { userToken } = data;
        const { userId, role } = data.createdUser;
        const name = data.createdUser.fullname;

        localStorage.setItem('userToken', userToken);
        localStorage.setItem('userId', userId);
        localStorage.setItem('fullname', name);
        localStorage.setItem('role', role);

        dispatch({
          type: SET_AUTH_USER,
          payload: {
            isAuthenticated,
            userId,
            userToken,
            role,
            fullname: name,
          },
        });

        return history.push('/users/foods');
      }
      return dispatch({
        type: SET_ERRORS,
        payload: [...data.errors],
      });
    })
    .catch(() => {
      dispatch({
        type: SET_ERRORS,
        payload: [{ msg: 'A network error occured tried again' }],
      });
    });
};

export const loginUser = (userData = {}, history) => (dispatch) => {
  // axios
  //   .post(loginUrl, userData)
  fetch(loginUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(userData),
  })
    .then(res => res.json())
    .then((data) => {
      console.log(data, '=============');
      if (data.success) {
        const isAuthenticated = true;
        const { userToken } = data;
        const { fullname, role, userId } = data.userData;

        localStorage.setItem('userToken', userToken);
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('role', role);
        localStorage.setItem('userId', userId);

        dispatch(
          setAuthUser({
            isAuthenticated,
            fullname,
            role,
            userId,
            userToken,
          }),
        );

        return history.push('/users/foods');
      }
      return dispatch({
        type: SET_ERRORS,
        payload: [...data.errors],
      });
    })
    .catch((error) => {
      console.log('err', error);
      dispatch({
        type: SET_ERRORS,
        payload: [{ msg: 'A network error occured tried again' }],
      });
    });
};
