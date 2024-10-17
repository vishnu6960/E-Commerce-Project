import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Router>
      <div className="App">
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">E-Commerce</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
              </ul>
              {/* Search bar */}
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search products" aria-label="Search" />
              </form>
              {/* Sort Dropdown */}
              <select className="form-select me-2" aria-label="Sort">
                <option value="none">Sort by</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
              {/* Cart link */}
              <Link className="btn btn-outline-light" to="/cart">Cart</Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
