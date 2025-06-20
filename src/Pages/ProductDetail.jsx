import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../Pages/products";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  useEffect(() => {
    const found = products.find((p) => p.id === Number(id));
    setProduct(found);
  }, [id]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlistItems");
    if (stored) {
      try {
        setWishlist(JSON.parse(stored));
      } catch {
        setWishlist([]);
      }
    }
  }, []);

  // ✅ Add to Cart
  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = existingCart.findIndex(item => item.id === product.id);

    if (existingIndex !== -1) {
      existingCart[existingIndex].qty += 1;
    } else {
      existingCart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        qty: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event('storage')); // 🚀 Sync count
    alert("✅ Added to cart successfully!");
  };

  // ✅ Add to Wishlist
  const addToWishlist = () => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      alert("Already in Wishlist!");
      return;
    }

    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
    };

    const updated = [...wishlist, newItem];
    setWishlist(updated);
    localStorage.setItem("wishlistItems", JSON.stringify(updated));
    window.dispatchEvent(new Event('storage')); // 🚀 Sync count
    alert("❤️ Added to Wishlist!");
  };

  // ✅ Place Order
  const handleOrder = () => {
    if (!address.trim()) {
      alert("Please enter your shipping address.");
      return;
    }

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      orderId: new Date().getTime(), // Unique Order ID
      name: product.name,
      price: product.price,
      image: product.image,
      address,
      paymentMethod,
      time: new Date().getTime(), // ✅ Save as timestamp
      status: "Placed"
    };

    localStorage.setItem("orders", JSON.stringify([newOrder, ...orders]));
    window.dispatchEvent(new Event('storage')); // 🚀 Sync order count
    alert("✅ Order placed successfully!");
    setAddress("");
  };

  if (!product) {
    return (
      <div className="text-center mt-10">
        <p>Product not found.</p>
        <Link to="/products" className="text-blue-600 underline">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      {/* Product Image */}
      <div className="flex-1">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-sm mx-auto rounded-lg object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-red-600 text-xl font-semibold mb-4">
          ₹{product.price.toLocaleString()}
        </p>

        <p><strong>Gold Weight:</strong> 2.3 grams</p>
        <p><strong>Carat:</strong> 18K</p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded"
          >
            🛒 Add to Cart
          </button>
          <button
            onClick={addToWishlist}
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded"
          >
            💖 Add to Wishlist
          </button>
        </div>

        <div className="mt-6 space-y-3">
          <label className="block text-sm font-medium">Shipping Address:</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label className="block text-sm font-medium">Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit Card</option>
          </select>

          <button
            onClick={handleOrder}
            className="bg-green-600 text-white w-full py-2 rounded mt-4 hover:bg-green-700"
          >
            ✅ Place Order
          </button>
        </div>

        <Link to="/products" className="block text-blue-600 mt-4 underline">
          ← Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
