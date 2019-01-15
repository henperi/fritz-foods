const userDefaultState = {
  userId: undefined,
  userToken: undefined,
  fullname: undefined,
  email: undefined,
};

const userReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case 'SET_AUTH_USER':
      return {
        ...action.user,
      };
    case 'SET_USER_TOKEN':
      return {
        ...state,
        userToken: action.userToken,
      };
    case 'REMOVE_USER_TOKEN':
      return {
        userToken: undefined,
      };

    default:
      return state;
  }
};

export default userReducer;
