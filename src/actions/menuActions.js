// import axios from 'axios';
import { GET_MENU, SET_ERRORS } from './actionTypes';

const baseApi = 'http://localhost:5000/api/v1';

export const getMenu = () => (dispatch) => {
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
      // console.log('=============', data.menu, '=============');
      if (data.success) {
        dispatch({
          type: GET_MENU,
          payload: { menu: [...data.menu] },
        });
      }
    })
    .catch(() => {
      dispatch({
        type: SET_ERRORS,
        payload: [{ msg: 'A network error occured tried again' }],
      });
    });
};

export const updateMenu = () => {};
