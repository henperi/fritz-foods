export const addToCart = ({ id = '', qty = '' } = {}) => ({
  type: 'ADD_TO_CART',
  foodItem: { id, qty },
});
export const removeFromCart = ({ id } = {}) => ({ type: 'REMOVE_FROM_CART', id });

export const updateCartQty = (id, updates) => ({
  type: 'UPDATE_CART_ITEM_QUANTITY',
  updates,
  id,
});

export const emptyCart = () => ({ type: 'EMPTY_CART' });
