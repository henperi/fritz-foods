import JWT from 'jsonwebtoken';
import axiosInstance, { setAxiosToken } from '../utils/axiosInstance';
import { SET_ERRORS, SET_AUTH_USER, REMOVE_AUTH_USER } from './actionTypes';

// export const setAuthUser = (payload = {}) => ({
//   type: SET_AUTH_USER,
//   payload,
// });
export const setAuthUser = (token) => {
  const decodedToken = JWT.decode(token);
  // const { userId, email, role, fullname } = decodedToken;

  // configureLocalStorage.setAuthUser(token);
  // remember to set axios auth token here

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

export const signupUser = (userData = {}, history) => (dispatch) => {
  axiosInstance
    .post(signupUrl, userData)
    .then((response) => {
      const { data } = response;
      const { userToken } = data;

      dispatch(setAuthUser(userToken));

      return history.push('/users/foods');
    })
    .catch((errors) => {
      const { response = {}, request } = errors;

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

export const loginUser = (userData = {}, history) => (dispatch) => {
  axiosInstance
    .post(loginUrl, userData)
    .then((response) => {
      // console.log('=============', response, '=============');
      const { data } = response;
      // const isAuthenticated = true;
      const { userToken } = data;
      // const { fullname, role, userId } = data.userData;

      // localStorage.setItem('userToken', userToken);
      // localStorage.setItem('fullname', fullname);
      // localStorage.setItem('role', role);
      // localStorage.setItem('userId', userId);

      // setAxiosToken(userToken);

      dispatch(setAuthUser(userToken));

      return history.push('/users/foods');
    })
    .catch((errors) => {
      const { response = {}, request } = errors;
      // console.log(errors);
      // console.log(response);
      // console.log('=======');
      // console.log(request);

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
