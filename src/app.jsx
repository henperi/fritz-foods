import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import configureStore from './store/configureStore';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
