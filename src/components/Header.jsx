import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';


const Header = ({ searchQuery, setSearchQuery, sortOption, setSortOption, isClicked, setClicked }) => {

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle sort selection change
  const handleSortChange = (e) => {
    setSortOption(e.target.value); 
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="navbar bg-light sticky-top">
      <Container fluid>
        <Row className="w-100 align-items-center">

          <Col xs={12} md={2} className="text-center text-md-start mb-2 mb-md-0">
          <Link to='/'>
          <h3>MyStore</h3>
          </Link>
          </Col>

          <Col xs={12} md={5} className="mb-2 mb-md-0">
            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search products..."
                className="form-control me-2"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </form>
          </Col>

          <Col xs={12} md={3} className="d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
            <select
              className="form-select"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="">Sort By</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </Col>

          <Col xs={12} md={2} className="text-center text-md-end">
            <Button variant="outline-primary" onClick={() => setClicked(true)}>
              <i className="bi bi-cart-fill"></i> Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
