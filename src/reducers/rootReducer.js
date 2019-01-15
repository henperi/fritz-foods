import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import modalReducer from './modalReducers';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  modal: modalReducer,
});

export default rootReducer;
