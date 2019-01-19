import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOGGLE_CART_SLIDER,
  FETCH_CART_ITEMS,
  SET_VISIBLE_CART,
} from './actionTypes';

export const addToCart = id => ({
  type: ADD_TO_CART,
  id,
});

export const setVisibleCart = id => ({
  type: SET_VISIBLE_CART,
  id,
});

// export const fetchCartItems = (foodItems = {}) => ({
//   type: FETCH_CART_ITEMS,
//   foodItems,
// });

const baseApi = 'http://localhost:5000/api/v1';

export const fetchCartItems = cartItems => (dispatch) => {
  // console.log('FetchingCartItems', cartItems);
  // console.log('FetchingCartItems', cartItems.length);
  if (cartItems) {
    for (let i = 0; i < cartItems.length; i += 1) {
      const { foodId, quantity } = cartItems[i];
      const fetchCartItemUrl = `${baseApi}/menu/${foodId}`;
      fetch(`${fetchCartItemUrl}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      })
        .then(res => res.json())
        .then((data) => {
          console.log('=============', data, '=============');
          if (data.success) {
            // dispatch(setVisibleCart)
            // dispatch({
            //   type: GET_MENU,
            //   payload: { menu: [...data.menu] },
            // });
          }
        })
        .catch(() => {
          // dispatch({
          //   type: SET_ERRORS,
          //   payload: [{ msg: 'A network error occured tried again' }],
          // });
        });
    }
  }
};

export const removeFromCart = ({ id } = {}) => ({ type: REMOVE_FROM_CART, id });

export const updateCartQty = (id, updates) => ({
  type: 'UPDATE_CART_ITEM_QUANTITY',
  updates,
  id,
});

export const emptyCart = () => ({ type: 'EMPTY_CART' });

export const toggleCartSlider = () => ({ type: TOGGLE_CART_SLIDER });
