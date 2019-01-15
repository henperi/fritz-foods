import { createStore, combineReducers } from 'redux';

const userDefaultState = {
  userId: undefined,
  userToken: undefined,
  fullname: undefined,
  email: undefined,
};

const userReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case 'SET_AUTH_USER':
      return {
        ...action.user,
      };
    case 'SET_USER_TOKEN':
      return {
        ...state,
        userToken: action.userToken,
      };
    case 'REMOVE_USER_TOKEN':
      return {
        userToken: undefined,
      };

    default:
      return state;
  }
};

const cartDefaultState = [];
const cartReducer = (state = cartDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.foodItem];

    case 'REMOVE_FROM_CART':
      return state.filter(({ id }) => id !== action.id);

    case 'UPDATE_CART_ITEM_QUANTITY':
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, ...action.updates };
        }
        return item;
      });

    case 'EMPTY_CART':
      return [];

    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    user: userReducer,
    cart: cartReducer,
  }),
);

store.subscribe(() => {
  console.log(store.getState());
});

// Action Generators
const setUserToken = ({ userToken } = {}) => ({ type: 'SET_USER_TOKEN', userToken });
const setAuthUser = (user = {}) => ({
  type: 'SET_AUTH_USER',
  user,
});
const addToCart = ({ id = '', qty = '' } = {}) => ({ type: 'ADD_TO_CART', foodItem: { id, qty } });
const removeFromCart = ({ id } = {}) => ({ type: 'REMOVE_FROM_CART', id });
const updateCartQty = (id, updates) => ({
  type: 'UPDATE_CART_ITEM_QUANTITY',
  updates,
  id,
});
const emptyCart = () => ({ type: 'EMPTY_CART' });

// Dispatch the actions
store.dispatch(setUserToken({ userToken: '1qw2323' }));
store.dispatch(
  setAuthUser({
    userId: 1,
    userToken: 'xs12we',
    email: 'pp@m.com',
    fullname: 'Ahmed',
  }),
);
store.dispatch(addToCart({ id: 1, qty: 1 }));
store.dispatch(addToCart({ id: 2, qty: 1 }));
store.dispatch(addToCart({ id: 3, qty: 1 }));
store.dispatch(updateCartQty(3, { qty: 20 }));
store.dispatch(removeFromCart({ id: 2 }));
store.dispatch(setAuthUser());
store.dispatch(emptyCart());

export default store;
