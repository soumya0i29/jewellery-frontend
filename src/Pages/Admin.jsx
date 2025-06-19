import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    stock: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', {
        name: formData.name,
        price: Number(formData.price),
        image: formData.image,
        stock: Number(formData.stock),
      });
      setMessage('Product added successfully!');
      setFormData({ name: '', price: '', image: '', stock: '' });
    } catch (err) {
      setMessage('Error adding product.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-orange-500 mb-10">Admin Panel - Add Product</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Product Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
            placeholder="Diamond Necklace"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Price (₹)</span>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
            placeholder="25000"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Image URL</span>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
            placeholder="https://example.com/image.jpg"
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700 font-semibold">Stock Quantity</span>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
            placeholder="10"
          />
        </label>

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors duration-300 w-full font-semibold"
        >
          Add Product
        </button>

        {message && (
          <p className={`mt-4 text-center font-semibold ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Admin;
