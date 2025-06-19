import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  // Load cart items for summary
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartTotal = cart.reduce((t, item) => t + item.price * (item.qty || 1), 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPlacingOrder(true);

    setTimeout(() => {
      // Save order
      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      const newOrder = {
        id: "ORD-" + Date.now(),
        date: new Date().toISOString().slice(0, 10),
        status: "Placed",
        total: cartTotal,
        items: cart,
        shipping: {
          name: formData.name,
          email: formData.email,
          address: formData.address,
        },
      };
      localStorage.setItem("orders", JSON.stringify([newOrder, ...orders]));
      localStorage.removeItem("cart");

      setIsPlacingOrder(false);
      // Optionally show a success animation/modal here

      navigate("/orders");
    }, 1700); // Simulate payment delay for effect
  };

  return (
    <div className="checkout-bg">
      <div className="checkout-container">
        <h2 className="checkout-title">Secure Payment</h2>
        <div className="checkout-flex">
          <form className="payment-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleChange}
              required
              rows={2}
            ></textarea>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              maxLength="16"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
            <div className="inline-fields">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                maxLength="4"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="pay-btn" disabled={isPlacingOrder}>
              {isPlacingOrder ? "Processing..." : "Pay & Place Order"}
            </button>
          </form>
          <div className="checkout-summary">
            <h3>Your Cart</h3>
            {cart.length === 0 ? (
              <p className="empty-cart-msg">Your cart is empty.</p>
            ) : (
              <ul className="checkout-cart-list">
                {cart.map((item, idx) => (
                  <li key={idx} className="checkout-cart-item">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <div className="checkout-cart-name">{item.name}</div>
                      <div className="checkout-cart-qty">
                        Qty: <b>{item.qty || 1}</b>
                      </div>
                    </div>
                    <div className="checkout-cart-price">
                      ₹{(item.price * (item.qty || 1)).toLocaleString()}
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="checkout-cart-total">
              <span>Total:</span>
              <span className="checkout-cart-total-value">
                ₹{cartTotal.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        {isPlacingOrder && (
          <div className="checkout-overlay">
            <div className="checkout-loader">
              <span className="checkout-spinner"></span>
              <div>Processing Payment...</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;