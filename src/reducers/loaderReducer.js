import { TOGGLE_LOADER } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADER:
      return {
        isLoading: !state.isLoading,
      };

    default:
      return state;
  }
};

export default loaderReducer;
