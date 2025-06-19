import React, { useState } from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers for card, expiry, cvv, amount fields where appropriate
    if (
      (name === "cardNumber" || name === "cvv" || name === "amount") &&
      !/^\d*$/.test(value)
    ) {
      return;
    }

    if (name === "expiry" && !/^[\d/]*$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (formData.cardNumber.length !== 16)
      errs.cardNumber = "Card number must be 16 digits";
    if (!/^\d{2}\/\d{2}$/.test(formData.expiry))
      errs.expiry = "Expiry must be in MM/YY format";
    if (formData.cvv.length !== 3) errs.cvv = "CVV must be 3 digits";
    if (!formData.amount || Number(formData.amount) <= 0)
      errs.amount = "Enter a valid amount";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(
        `Payment of ₹${formData.amount} successful! Thank you, ${formData.name}`
      );
      setFormData({
        name: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        amount: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="payment-wrapper">
      <form className="payment-card" onSubmit={handleSubmit} noValidate>
        <h2 className="payment-title">Payment Details</h2>

        <div className="input-group">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={errors.name ? "invalid" : ""}
          />
          <label htmlFor="name">Cardholder Name</label>
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className="input-group">
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            maxLength="16"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            className={errors.cardNumber ? "invalid" : ""}
            placeholder="1234 5678 9012 3456"
          />
          <label htmlFor="cardNumber">Card Number</label>
          {errors.cardNumber && (
            <span className="error-msg">{errors.cardNumber}</span>
          )}
        </div>

        <div className="small-inputs">
          <div className="input-group">
            <input
              type="text"
              name="expiry"
              id="expiry"
              maxLength="5"
              value={formData.expiry}
              onChange={handleChange}
              required
              className={errors.expiry ? "invalid" : ""}
              placeholder="MM/YY"
            />
            <label htmlFor="expiry">Expiry Date</label>
            {errors.expiry && <span className="error-msg">{errors.expiry}</span>}
          </div>

          <div className="input-group">
            <input
              type="password"
              name="cvv"
              id="cvv"
              maxLength="3"
              value={formData.cvv}
              onChange={handleChange}
              required
              className={errors.cvv ? "invalid" : ""}
              placeholder="123"
            />
            <label htmlFor="cvv">CVV</label>
            {errors.cvv && <span className="error-msg">{errors.cvv}</span>}
          </div>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="amount"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className={errors.amount ? "invalid" : ""}
            placeholder="₹ Amount"
          />
          <label htmlFor="amount">Amount</label>
          {errors.amount && <span className="error-msg">{errors.amount}</span>}
        </div>

        <button type="submit" className="pay-btn">
          Pay Now
        </button>
      </form>

      <div className="summary-box">
        <h3>Order Summary</h3>
        <p>
          <strong>Amount:</strong>{" "}
          {formData.amount ? `₹${Number(formData.amount).toLocaleString()}` : "₹0"}
        </p>
        <p>
          <strong>Cardholder:</strong> {formData.name || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default PaymentForm;
