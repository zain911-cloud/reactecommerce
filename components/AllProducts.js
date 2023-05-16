import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct, editProduct } from '../actions';
import { Link } from 'react-router-dom';
import Alert from './Alert';

const AllProducts = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);
  const [sortDirection, setSortDirection] = useState(1);
  const products = useSelector(state => state.products.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleEdit = (product) => {
    setIsEditing(true);
    setEditedProduct(product);
  };

  const handleSave = (product) => {
    dispatch(editProduct(product));
    setIsEditing(false);
    setEditedProduct(null);
    Alert.success('Product updated successfully');
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    Alert.success('Product deleted successfully');
  };

  const handleSort = () => {
    setSortDirection(sortDirection * -1);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortDirection === 1) {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div>
      <h2>All Products</h2>
      <button onClick={handleSort}>
        Sort by Price {sortDirection === 1 ? '↑' : '↓'}
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                {isEditing && editedProduct && editedProduct.id === product.id ?
                  <input type="text" value={editedProduct.name} onChange={e => setEditedProduct({...editedProduct, name: e.target.value})} />
                  :
                  product.name
                }
              </td>
              <td>
                {isEditing && editedProduct && editedProduct.id === product.id ?
                  <input type="text" value={editedProduct.price} onChange={e => setEditedProduct({...editedProduct, price: e.target.value})} />
                  :
                  product.price
                }
              </td>
              <td>
                {isEditing && editedProduct && editedProduct.id === product.id ?
                  <textarea value={editedProduct.description} onChange={e => setEditedProduct({...editedProduct, description: e.target.value})} />
                  :
                  product.description
                }
              </td>
              <td>
                {isEditing && editedProduct && editedProduct.id === product.id ?
                  <button onClick={() => handleSave(editedProduct)}>Save</button>
                  :
                  <button onClick={() => handleEdit(product)}>Edit</button>
                }
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/create">Add Product</Link>
    </div>
  );
};

export default AllProducts;
