import axios from 'axios';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';

export const EDIT_PRODUCT_REQUEST = 'EDIT_PRODUCT_REQUEST';
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
export const EDIT_PRODUCT_FAILURE = 'EDIT_PRODUCT_FAILURE';

export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    axios.get('https://my-json-server.typicode.com/' )
      .then(response => {
        const products = response.data;
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: products
        });
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch({
          type: FETCH_PRODUCTS_FAILURE,
          payload: errorMessage
        });
      });
  };
};

export const addProduct = (product) => {
  return (dispatch) => {
    dispatch({ type: ADD_PRODUCT_REQUEST });

    axios.post('https://my-json-server.typicode.com/' , product)
      .then(response => {
        const newProduct = response.data;
        dispatch({
          type: ADD_PRODUCT_SUCCESS,
          payload: newProduct
        });
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch({
          type: ADD_PRODUCT_FAILURE,
          payload: errorMessage
        });
      });
  };
};

export const editProduct = (product) => {
  return (dispatch) => {
    dispatch({ type: EDIT_PRODUCT_REQUEST });

    axios.put(`https://my-json-server.typicode.com/ ${product.id}`, product)
      .then(response => {
        const updatedProduct = response.data;
        dispatch({
          type: EDIT_PRODUCT_SUCCESS,
          payload: updatedProduct
        });
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch({
          type: EDIT_PRODUCT_FAILURE,
          payload: errorMessage
        });
      });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    axios.delete(`https://my-json-server.typicode.com/ ${id}`)
      .then(response => {
        const deletedProduct = response.data;
        dispatch({
          type: DELETE_PRODUCT_SUCCESS,
          payload: deletedProduct
        });
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch({
          type: DELETE_PRODUCT_FAILURE,
          payload: errorMessage
        });
      });
  };
};
