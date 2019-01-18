import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import configureStore from './store/configureStore';
import { setAuthUser } from './actions/userActions';

const store = configureStore();

if (localStorage.userToken && localStorage.userId) {
  const {
    fullname, role, userId, userToken,
  } = localStorage;

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

const jsx = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
