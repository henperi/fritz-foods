import { SLIDE_CART } from '../actions/actionTypes';

export const initialState = {
  slide: false,
};

const slideCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SLIDE_CART:
      return {
        slide: !state.slide,
      };

    default:
      return state;
  }
};

export default slideCartReducer;
