const cartDefaultState = [];
const cartReducer = (state = cartDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.foodItem];

    case 'REMOVE_FROM_CART':
      return state.filter(({ id }) => id !== action.id);

    case 'UPDATE_CART_ITEM_QUANTITY':
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, ...action.updates };
        }
        return item;
      });

    case 'EMPTY_CART':
      return [];

    default:
      return state;
  }
};

export default cartReducer;
