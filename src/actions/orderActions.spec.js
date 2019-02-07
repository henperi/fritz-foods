/* eslint-disable no-undef */
import { setOrderHistory, setOrderedItems } from './orderActions';

describe('The orderActions Test Suite', () => {
  it('should setup setOrderHistory action object', () => {
    const payload = {
      food_id: 5,
      name: 'Rice',
      price: 500,
    };
    const action = setOrderHistory(payload);

    expect(action).toEqual({
      type: 'SET_ORDER_HISTORY',
      payload,
    });
  });

  it('should setup setOrderedItems action object', () => {
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
    const action = setOrderedItems(payload);

    expect(action).toEqual({
      type: 'SET_ORDERED_ITEMS',
      payload,
    });
  });
});
