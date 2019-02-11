import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import ReduxToastr from 'react-redux-toastr';
import AppRoutes from './routes/AppRoutes';
import configureStore from './store/configureStore';
import getStoreState from './utils/getStoreState';

const store = configureStore();

getStoreState(store);

const App = (
  <Provider store={store}>
    <AppRoutes />
    {/**
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick/>
    */}
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
