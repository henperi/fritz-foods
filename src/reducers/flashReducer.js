import { SHOW_FLASH, REMOVE_FLASH } from '../actions/actionTypes';

const initialState = {
  showFlash: false,
  title: '',
  message: '',
  flashType: 'success',
};

const flashReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FLASH:
      return {
        showFlash: true,
        ...action.payload,
      };
    case REMOVE_FLASH:
      return {
        showFlash: false,
      };

    default:
      return state;
  }
};

export default flashReducer;
