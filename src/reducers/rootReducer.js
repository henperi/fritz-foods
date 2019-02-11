import { combineReducers } from 'redux';
// import {reducer as toastrReducer} from 'react-redux-toastr';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import modalReducer from './modalReducers';
import errorReducer from './errorReducer';
import menuReducer from './menuReducer';
import featuredMenuReducer from './featuredMenuReducer';
import orderReducer from './orderReducer';
import slideCartReducer from './slideCartReducer';
import flashReducer from './flashReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  modal: modalReducer,
  errors: errorReducer,
  menu: menuReducer,
  featuredMenu: featuredMenuReducer,
  order: orderReducer,
  slideCart: slideCartReducer,
  flash: flashReducer,
  // toastr: toastrReducer,
});

export default rootReducer;
