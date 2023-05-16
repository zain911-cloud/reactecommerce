import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions';
import Alert from './Alert';

const ProductDetail = ({ match }) => {
  const productId = match.params.id;
  const product = useSelector(state =>
    state.products.items.find(item => item.id === parseInt(productId))
  );
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    Alert.success('Product added to cart successfully');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
