import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';
import './ProductList.css'

import axios from 'axios'

const ProductList = ({ searchQuery, sortOption }) => {

  const dispatch = useDispatch()

  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/products")
    setProducts(response.data.products)
  }
  console.log(products)
  useEffect(() =>{
    fetchData()
  }, [])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === 'low-to-high') {
      return a.price - b.price;
    }
    if (sortOption === 'high-to-low') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className='mainContainer'>
      {sortedProducts.map((item) => (
        <Card className='card' style={{ width: '18rem' }} key={item.id}>
          <div className='imgDiv'>
            <img variant="top" src={item.images[0]} />
          </div>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <p>${item.price}</p>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Button variant="primary" onClick={() => dispatch(addToCart(item))}>Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
      
    </div>
  )
}

export default ProductList;
