import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

export default () => {
  const store = createStore(rootReducer);
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
