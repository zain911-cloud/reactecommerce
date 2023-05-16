import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItemsCount = useSelector(state => state.cart.items.length);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Ecommerce Site</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create">Add Product</Link>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <Link to="/cart">
          <button className="btn btn-outline-primary">
            Cart ({cartItemsCount})
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
