import { SET_ERRORS, SET_ORDER_HISTORY } from './actionTypes';
import axiosInstance from '../utils/axiosInstance';
import { emptyCart } from './cartActions';

const placeOrder = (cartItems = {}, handleModal) => (dispatch) => {
  console.log(cartItems);
  const orderData = {
    foodItems: cartItems,
  };
  axiosInstance
    .post('/orders', orderData)
    .then((response) => {
      const { data } = response;
      handleModal();
      dispatch(emptyCart());
    })
    .catch((errors) => {
      const { response = {}, request } = errors;
      console.log(errors);
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

export const setOrderHistory = payload => ({
  type: SET_ORDER_HISTORY,
  payload,
});

export const getOrderHistory = userId => (dispatch) => {
  console.log(userId);
  axiosInstance
    .get(`/users/${userId}/orders`)
    .then((response) => {
      const { data } = response;
      console.log(data);
      // dispatch(setOrderHistory());
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

export default placeOrder;
