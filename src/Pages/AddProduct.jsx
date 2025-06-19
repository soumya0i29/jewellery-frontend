// src/Pages/AddProduct/AddProduct.jsx
import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/products", form)
      .then((res) => {
        alert("Product added successfully!");
        setForm({ name: "", price: "", image: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Error adding product.");
      });
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Preview below */}
      {form.image && (
        <div className="preview">
          <h4>Image Preview:</h4>
          <img src={form.image} alt="Preview" />
        </div>
      )}
    </div>
  );
};

export default AddProduct;
