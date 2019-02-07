/* eslint-disable no-undef */
import { setMenu, setFeaturedMenu, getMenu } from './menuActions';

describe('The menuActions Test Suite', () => {
  it('should setup setMenu action object', () => {
    const payload = {
      food_id: 5,
      name: 'Rice',
      price: 500,
    };
    const action = setMenu(payload);

    expect(action).toEqual({
      type: 'SET_MENU',
      payload,
    });
  });

  it('should setup setFeaturedMenu action object', () => {
    const payload = [
      {
        food_id: 5,
        name: 'Rice',
        price: 500,
      },
      {
        food_id: 5,
        name: 'Rice',
        price: 500,
      },
      {
        food_id: 5,
        name: 'Rice',
        price: 500,
      },
    ];
    const action = setFeaturedMenu(payload);

    expect(action).toEqual({
      type: 'SET_FEATURED_MENU',
      payload,
    });
  });
});
