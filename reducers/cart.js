import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../types.js';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.product.id === product.id);
      if (itemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[itemIndex].quantity += quantity;
        return { ...state, items: updatedItems };
      }
      return { ...state, items: [...state.items, { product, quantity }] };
    }
    case UPDATE_CART_QUANTITY: {
      const { productId, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.product.id === productId);
      if (itemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[itemIndex].quantity = quantity;
        return { ...state, items: updatedItems };
      }
      return state;
    }
    case REMOVE_FROM_CART: {
      const { productId } = action.payload;
      const updatedItems = state.items.filter((item) => item.product.id !== productId);
      return { ...state, items: updatedItems };
    }
    default:
      return state;
  }
};

export default cartReducer;
