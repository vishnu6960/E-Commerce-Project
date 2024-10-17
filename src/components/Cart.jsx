import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from './cartSlice';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Cart() {
  const cart = useSelector((state) => state.cart);
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
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item, e.target.value)}
                      min="1"
                      className="form-control"
                    />
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => dispatch(removeFromCart(item))} className="btn btn-danger">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
