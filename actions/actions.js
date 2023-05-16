import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    EDIT_PRODUCT_REQUEST,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
  } from './types';
  
  // Action creators for fetching products
  export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST,
  });
  
  export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  });
  
  export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  });
  
  // Action creators for adding a product
  export const addProductRequest = (product) => ({
    type: ADD_PRODUCT_REQUEST,
    payload: product,
  });
  
  export const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product,
  });
  
  export const addProductFailure = (error) => ({
    type: ADD_PRODUCT_FAILURE,
    payload: error,
  });
  
  // Action creators for editing a product
  export const editProductRequest = (productId, updatedProduct) => ({
    type: EDIT_PRODUCT_REQUEST,
    payload: { productId, updatedProduct },
  });
  
  export const editProductSuccess = (product) => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product,
  });
  
  export const editProductFailure = (error) => ({
    type: EDIT_PRODUCT_FAILURE,
    payload: error,
  });
  
  // Action creators for deleting a product
  export const deleteProductRequest = (productId) => ({
    type: DELETE_PRODUCT_REQUEST,
    payload: productId,
  });
  
  export const deleteProductSuccess = () => ({
    type: DELETE_PRODUCT_SUCCESS,
  });
  
  export const deleteProductFailure = (error) => ({
    type: DELETE_PRODUCT_FAILURE,
    payload: error,
  });
  