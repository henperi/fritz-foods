import { SHOW_FLASH, REMOVE_FLASH } from './actionTypes';

export const showFlash = data => ({
  type: SHOW_FLASH,
  payload: {
    title: data.title,
    message: data.message,
    flashType: data.flashType,
  },
});
export const removeFlash = () => ({
  type: REMOVE_FLASH,
});
