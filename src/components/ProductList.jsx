import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('none');
  const dispatch = useDispatch();

  // Fetching products from dummyjson API
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  // Filtering and sorting products based on search and price
  const filteredProducts = products
    .filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (filter === 'lowToHigh') return a.price - b.price;
      if (filter === 'highToLow') return b.price - a.price;
      return 0;
    });

  return (
    <div className="container mt-4">
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img src={product.thumbnail} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <button onClick={() => dispatch(addToCart(product))} className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
