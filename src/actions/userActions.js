import axiosInstance, { setAxiosToken } from '../utils/axiosInstance';
import { SET_ERRORS, SET_AUTH_USER, REMOVE_AUTH_USER } from './actionTypes';

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

const signupUrl = '/auth/signup';
const loginUrl = '/auth/login';

export const signupUser = (userData = {}, history) => (dispatch) => {
  axiosInstance
    .post(signupUrl, userData)
    .then((response) => {
      const { data } = response;
      const isAuthenticated = true;
      const { userToken } = data;
      const { userId, role } = data.createdUser;
      const name = data.createdUser.fullname;

      localStorage.setItem('userToken', userToken);
      localStorage.setItem('userId', userId);
      localStorage.setItem('fullname', name);
      localStorage.setItem('role', role);

      setAxiosToken(userToken);

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
    })
    .catch((errors) => {
      const { response = {}, request } = errors;
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

export const loginUser = (userData = {}, history) => (dispatch) => {
  axiosInstance
    .post(loginUrl, userData)
    .then((response) => {
      // console.log('=============', response, '=============');
      const { data } = response;
      const isAuthenticated = true;
      const { userToken } = data;
      const { fullname, role, userId } = data.userData;

      localStorage.setItem('userToken', userToken);
      localStorage.setItem('fullname', fullname);
      localStorage.setItem('role', role);
      localStorage.setItem('userId', userId);

      setAxiosToken(userToken);

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
    })
    .catch((errors) => {
      const { response = {}, request } = errors;
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
