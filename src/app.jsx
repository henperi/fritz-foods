import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import configureStore from './store/configureStore';
import getStoreState from './utils/getStoreState';

const store = configureStore();

getStoreState(store);

const App = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
