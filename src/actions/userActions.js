export const setUserToken = ({ userToken } = {}) => ({ type: 'SET_USER_TOKEN', userToken });

export const setAuthUser = (user = {}) => ({
  type: 'SET_AUTH_USER',
  user,
});
