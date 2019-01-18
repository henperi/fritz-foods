import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const middlewares = [thunk];
const initialState = {};
export default () => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
  return store;
};

// store.subscribe(() => {
//   console.log(store.getState());
// });

// Action Generators

// Dispatch the actions
// store.dispatch(setUserToken({ userToken: '1qw2323' }));
// store.dispatch(
//   setAuthUser({
//     userId: 1,
//     userToken: 'xs12we',
//     email: 'pp@m.com',
//     fullname: 'Ahmed',
//   }),
// );
// store.dispatch(addToCart({ id: 1, qty: 1 }));
// store.dispatch(addToCart({ id: 2, qty: 1 }));
// store.dispatch(addToCart({ id: 3, qty: 1 }));
// store.dispatch(updateCartQty(3, { qty: 20 }));
// store.dispatch(removeFromCart({ id: 2 }));
// store.dispatch(setAuthUser());
// store.dispatch(emptyCart());

// export default store;
