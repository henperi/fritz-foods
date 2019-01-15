const modalDefaultState = {
  id: undefined,
  isOpen: false,
};

const modalReducer = (state = modalDefaultState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...action.modal,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: action.modal,
      };

    default:
      return state;
  }
};

export default modalReducer;
