// src/pages/Payment.jsx
import React, { useState } from "react";
import "./Payment.css";

const Payment = () => {
  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful! 🎉");
    // Clear cart logic can be added here
  };

  return (
    <div className="payment-container">
      <h2>Secure Payment</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label>Name on Card</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
          />
        </div>

        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            maxLength="16"
            value={form.cardNumber}
            onChange={handleChange}
            required
            placeholder="1234 5678 9012 3456"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Expiry</label>
            <input
              type="text"
              name="expiry"
              maxLength="5"
              value={form.expiry}
              onChange={handleChange}
              required
              placeholder="MM/YY"
            />
          </div>

          <div className="form-group">
            <label>CVV</label>
            <input
              type="password"
              name="cvv"
              maxLength="3"
              value={form.cvv}
              onChange={handleChange}
              required
              placeholder="123"
            />
          </div>
        </div>

        <button type="submit" className="pay-btn">Confirm Payment</button>
      </form>
    </div>
  );
};

export default Payment;
