import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage
  const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  };

  useEffect(() => {
    loadCart();

    // Live sync if cart changes from other tabs/pages
    const handleStorageChange = () => loadCart();

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new Event('storage'));
    alert("Item removed successfully!");
  };

  // Update item quantity
  const updateQty = (productId, newQty) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, qty: newQty > 0 ? newQty : 1 };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new Event('storage'));
  };

  // Clear all items from cart
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    window.dispatchEvent(new Event('storage'));
    alert("Cart cleared successfully!");
  };

  // Calculate total items and total price
  const totalItems = cartItems.reduce((sum, item) => sum + (item.qty || 1), 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty 🛒</h2>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          className="w-32 mx-auto opacity-60"
        />
        <Link to="/products">
          <button className="mt-6 px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">
            Shop Now
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">🛍️ Your Cart</h2>
      <div className="flex flex-col gap-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center bg-white shadow p-4 rounded-md gap-4">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-contain" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-red-600 font-bold">₹{item.price.toLocaleString()}</p>
              <div className="flex items-center gap-3 mt-2">
                <label className="text-sm font-medium">Qty:</label>
                <input
                  type="number"
                  min="1"
                  value={item.qty || 1}
                  onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                  className="w-16 border px-2 py-1 rounded"
                />
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded shadow flex justify-between items-center">
        <div>
          <p className="text-lg font-medium">Total Items: {totalItems}</p>
          <p className="text-xl font-bold">Total: ₹{totalPrice.toLocaleString()}</p>
        </div>
        <button
          onClick={clearCart}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
