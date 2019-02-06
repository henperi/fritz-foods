import { SET_FEATURED_MENU } from '../actions/actionTypes';

const initialState = [];

const featuredMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEATURED_MENU:
      return [...action.payload];

    default:
      return state;
  }
};

export default featuredMenuReducer;
