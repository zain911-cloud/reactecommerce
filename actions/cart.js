import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  CLEAR_CART,
} from './types';

export const addToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      productId,
    },
  };
};

export const updateQuantity = (productId, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
