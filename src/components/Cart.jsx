import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from './cartSlice';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap';
import './ProductList.css'


function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart)
  const dispatch = useDispatch();

  const handleQuantityChange = (product, quantity) => {
    dispatch(updateQuantity({ product, quantity }));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className='mainContainer'>
          {cart.map((item) => (
            <Card className='card' style={{ width: '18rem' }} key={item.id}>
              <div className='imgDiv'>
                <img variant="top" src={item.images[0]} />
              </div>
                <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item, e.target.value)}
                    min="1"
                    className="form-control"
                />
                <p>${item.price}</p>
                <button onClick={() => dispatch(removeFromCart(item))} className="btn btn-danger">Remove</button>
                </Card.Body>
            </Card>
          ))}
          
    </div>
      )}

<h2>Total: ${totalPrice.toFixed(2)}</h2>
    </div>

    
  );
}

export default Cart;
