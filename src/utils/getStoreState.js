import { setAuthUser } from '../actions/userActions';
import { setCurrentCart } from '../actions/cartActions';
import { setAxiosToken } from './axiosInstance';

export default (store) => {
  if (localStorage.userToken) {
    setAxiosToken(localStorage.userToken);

    store.dispatch(localStorage);
  }

  const foodItems = localStorage.foodItems ? JSON.parse(localStorage.foodItems) : [];
  store.dispatch(setCurrentCart(foodItems));
};
