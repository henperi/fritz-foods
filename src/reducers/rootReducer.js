import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import modalReducer from './modalReducers';
import errorReducer from './errorReducer';
import menuReducer from './menuReducer';
import featuredMenuReducer from './featuredMenuReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  modal: modalReducer,
  errors: errorReducer,
  menu: menuReducer,
  featuredMenu: featuredMenuReducer,
});

export default rootReducer;
