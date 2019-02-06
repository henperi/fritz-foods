import { SET_MENU, SET_ERRORS, SET_FEATURED_MENU } from './actionTypes';
import axiosInstance from '../utils/axiosInstance';

export const setMenu = (payload = {}) => ({
  type: SET_MENU,
  payload,
});

export const setFeaturedMenu = (payload = {}) => {
  const featuredMenu = payload.slice(0, 3);

  return {
    type: SET_FEATURED_MENU,
    payload: featuredMenu,
  };
};

export const getMenu = () => (dispatch) => {
  axiosInstance
    .get('/menu')
    .then((response) => {
      const { data } = response;
      dispatch({
        type: SET_MENU,
        payload: { menu: [...data.menu] },
      });
      dispatch(setFeaturedMenu(data.menu));
    })
    .catch((errors) => {
      const { response = {}, request } = errors;
      console.log(response);
      console.log('=======');
      console.log(request);

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

export const updateMenu = () => {};
