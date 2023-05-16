import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../actions';
import Alert from './Alert';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    Alert.success('Product removed from cart successfully');
  };

  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return <p>No items in cart.</p>;
    }

    return cartItems.map(item => (
      <div key={item.id} className="cart-item">
        <div className="cart-item-details">
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
        <div className="cart-item-remove">
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {renderCartItems()}
    </div>
  );
};

export default Cart;
