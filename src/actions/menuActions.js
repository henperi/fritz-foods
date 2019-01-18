// import axios from 'axios';
import { GET_MENU } from './actionTypes';

const baseApi = 'http://localhost:5000/api/v1';

export const getMenu = history => (dispatch) => {
  // axios
  //   .post(signupUrl, userData)
  fetch(`${baseApi}/menu`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })
    .then(res => res.json())
    .then((data) => {
      console.log('=============', data.menu, '=============');
      if (data.success) {
        dispatch({
          type: GET_MENU,
          payload: { menu: [...data.menu] },
        });
      }
      // return dispatch({
      //   // type: SET_ERRORS,
      //   // payload: [...data.errors],
      // });
    })
    .catch(() => {
      dispatch({
        // type: SET_ERRORS,
        // payload: [{ msg: 'A network error occured tried again' }],
      });
    });
};

export const loginUser = (userData = {}, history) => (dispatch) => {
  console.log(userData);
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
