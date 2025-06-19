import React, { useState } from 'react';
import './Contact.css';

const MAX_MESSAGE = 250;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleChange = e => {
    const { name, value } = e.target;
    if(name === "message") setCharCount(value.length);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSuccess(""); // Hide any previous success
      alert("Please fill all the fields.");
      return;
    }
    if (formData.message.length > MAX_MESSAGE) {
      setSuccess("");
      alert("Message too long!");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSuccess("Thank you! We'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
      setCharCount(0);
    }, 700);
  };

  return (
    <div className="contact-bg">
      <div className="contact-container">
        <h2>Contact Us 💬</h2>
        <div className="contact-info">
          We'd love to hear from you! Reach us on:
        </div>
        <div className="contact-links">
          <a href="mailto:youremail@example.com" className="contact-link" title="Email">
            <span role="img" aria-label="mail">📧</span>
          </a>
          <a href="https://wa.me/919876543210" className="contact-link" title="WhatsApp" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="whatsapp">💬</span>
          </a>
          <a href="https://www.instagram.com/" className="contact-link" title="Instagram" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="instagram">📸</span>
          </a>
        </div>
        {success && <div className="contact-success">{success}</div>}
        <form onSubmit={handleSubmit} className="contact-form" autoComplete="off">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            maxLength="40"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            maxLength="50"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            maxLength={MAX_MESSAGE}
          />
          <div className="char-count">
            {charCount}/{MAX_MESSAGE} characters
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;