import { setAuthUser } from '../actions/userActions';
import { setCurrentCart } from '../actions/cartActions';
import { setAxiosToken } from './axiosInstance';

export default (store) => {
  if (localStorage.userToken && localStorage.userId) {
    const {
      fullname = '', role = 'User', userId = '', userToken = '',
    } = localStorage;

    setAxiosToken(localStorage.userToken);

    store.dispatch(
      setAuthUser({
        isAuthenticated: true,
        fullname,
        role,
        userId,
        userToken,
      }),
    );
  }

  const foodItems = localStorage.foodItems ? JSON.parse(localStorage.foodItems) : [];
  store.dispatch(setCurrentCart(foodItems));
};
