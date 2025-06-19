import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQty, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * (item.qty || 1), 0);

  if (cart.length === 0) {
    return (
      <div className="cart-bg">
        <div className="cart-container">
          <h2>Your Cart</h2>
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              style={{ width: "120px", margin: "28px auto 0", display: "block", opacity: 0.65 }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-bg">
      <div className="cart-container">
        <h2>Your Cart</h2>
        <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <div className="qty-controls">
                  <button onClick={() => updateQty(item.id, Math.max((item.qty || 1) - 1, 1))} disabled={item.qty <= 1}>-</button>
                  <span>{item.qty || 1}</span>
                  <button onClick={() => updateQty(item.id, (item.qty || 1) + 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <h3>Total: ₹{totalPrice.toLocaleString()}</h3>
          <Link to="/checkout">
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;