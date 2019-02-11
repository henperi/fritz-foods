import { SHOW_FLASH, REMOVE_FLASH } from './actionTypes';

export const showFlash = (data = {}) => {
  const { title = '', message = '', flashType = 'success' } = data;
  return {
    type: SHOW_FLASH,
    payload: {
      title,
      message,
      flashType,
    },
  };
};

export const removeFlash = () => ({
  type: REMOVE_FLASH,
});
