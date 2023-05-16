import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import CreateProduct from './components/CreateProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={AllProducts} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/cart" component={Cart} />
      <Route path="/create" component={CreateProduct} />
    </BrowserRouter>
  );
};

export default App;


