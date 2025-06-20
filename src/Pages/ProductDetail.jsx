import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const sampleProducts = [
  { id: 1, name: "Gold Earrings", price: 5999, image: "/images/ear1.jpg", description: "Beautiful handcrafted gold earrings perfect for special occasions." },
  { id: 2, name: "Elegant Necklace", price: 15499, image: "/images/eleneck.jpg", description: "A stunning necklace that adds elegance to your style." },
  { id: 3, name: "Diamond rings", price: 2299, image: "/images/ring.jpg", description: "Sparkling diamond ring to celebrate love and elegance." },
  { id: 4, name: "Gold Earrings", price: 5999, image: "/images/ear2.jpg", description: "Beautiful handcrafted gold earrings perfect for special occasions." },
  { id: 5, name: "Elegant Necklace", price: 15499, image: "/images/eleneck1.jpg", description: "A stunning necklace that adds elegance to your style." },
  { id: 6, name: "Diamond rings", price: 2299, image: "/images/ring2.jpg", description: "Sparkling diamond ring to celebrate love and elegance." },
  { id: 7, name: "Gold Earrings", price: 5999, image: "/images/ear3.jpg", description: "Beautiful handcrafted gold earrings perfect for special occasions." },
  { id: 8, name: "Elegant Necklace", price: 15499, image: "/images/eleneck2.jpg", description: "A stunning necklace that adds elegance to your style." },
  { id: 9, name: "Diamond rings", price: 2299, image: "/images/ring3.jpg", description: "Sparkling diamond ring to celebrate love and elegance." },
  { id: 10, name: "Gold Earrings", price: 5999, image: "/images/ear4.jpg", description: "Beautiful handcrafted gold earrings perfect for special occasions." },
  { id: 11, name: "Elegant Necklace", price: 15499, image: "/images/eleneck3.jpg", description: "A stunning necklace that adds elegance to your style." },
  { id: 12, name: "Diamond rings", price: 2299, image: "/images/ring4.jpg", description: "Sparkling diamond ring to celebrate love and elegance." },
  { id: 13, name: "Gold Earrings", price: 5999, image: "/images/ear5.jpg",description: "Beautiful handcrafted gold earrings perfect for special occasions." },
  { id: 14, name: "Elegant Necklace", price: 15499, image: "/images/eleneck4.jpg",description: "A stunning necklace that adds elegance to your style." },
  { id: 15, name: "Diamond rings", price: 2299, image: "/images/ring5.jpg",description: "Sparkling diamond ring to celebrate love and elegance."  },
  { id: 16, name: "Gold Earrings", price: 5999, image: "/images/ear6.jpg",description: "Beautiful handcrafted gold earrings perfect for special occasions." },
  { id: 17, name: "Elegant Necklace", price: 15499, image: "/images/eleneck5.jpg",description: "A stunning necklace that adds elegance to your style." },
  { id: 18, name: "Diamond rings", price: 2299, image: "/images/ring6.jpg",description: "Sparkling diamond ring to celebrate love and elegance."  },
  { id: 19, name: "Gold Earrings", price: 5999, image: "/images/ear7.jpg",description: "Beautiful handcrafted gold earrings perfect for special occasions." },
  { id: 20, name: "Elegant Necklace", price: 15499, image: "/images/eleneck6.jpg",description: "A stunning necklace that adds elegance to your style." },
  { id: 21, name: "Diamond rings", price: 2299, image: "/images/ring7.jpg",description: "Sparkling diamond ring to celebrate love and elegance."  },
  { id: 22, name: "Gold Earrings", price: 5999, image: "/images/ear8.jpg",description: "Beautiful handcrafted gold earrings perfect for special occasions." },
  { id: 23, name: "Elegant Necklace", price: 15499, image: "/images/eleneck8.jpg",description: "A stunning necklace that adds elegance to your style." },
  { id: 24, name: "Diamond rings", price: 2299, image: "/images/ring8.jpg",description: "Sparkling diamond ring to celebrate love and elegance."  },
  { id: 25, name: "Gold Earrings", price: 5999, image: "/images/ear9.jpg",description: "Beautiful handcrafted gold earrings perfect for special occasions." },
  { id: 26, name: "Elegant Necklace", price: 15499, image: "/images/eleneck9.jpg",description: "A stunning necklace that adds elegance to your style." },
  { id: 27, name: "Diamond rings", price: 2299, image: "/images/ring9.jpg",description: "Sparkling diamond ring to celebrate love and elegance."  },
  { id: 28, name: "Gold Earrings", price: 5999, image: "/images/ear10.jpg",description: "Beautiful handcrafted gold earrings perfect for special occasions." },
  { id: 29, name: "Elegant Necklace", price: 15499, image: "/images/eleneck10.jpg",description: "A stunning necklace that adds elegance to your style." },
  { id: 30, name: "Diamond rings", price: 2299, image: "/images/ring10.jpg",description: "Sparkling diamond ring to celebrate love and elegance."  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  const [wishlist, setWishlist] = useState([]);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  const handleOrder = () => {
    if (!address.trim()) {
      alert("Please enter your shipping address.");
      return;
    }

    const newOrder = {
      product,
      address,
      paymentMethod,
      date: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    alert("✅ Order placed successfully!");
    setAddress("");
  };

  const addToWishlist = () => {
    const exists = wishlist.find((item) => item.id === product.id);
    if (exists) {
      alert("Already in Wishlist!");
      return;
    }
    const updated = [...wishlist, product];
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    alert("Added to Wishlist!");
  };

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <Link to="/" className="text-blue-600 mt-4 inline-block">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-5xl mx-auto bg-white rounded-lg shadow mt-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex justify-center md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 object-cover rounded-xl shadow"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold text-blue-900">{product.name}</h2>
          <p className="text-xl font-semibold text-gray-800">₹{product.price.toLocaleString()}</p>
          <p className="text-gray-600">{product.description}</p>

          <p><strong>Gold Weight:</strong> 2.3 grams</p>
          <p><strong>Carat:</strong> 18K</p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              🛒 Add to Cart
            </button>

            <button
              onClick={addToWishlist}
              className="border border-gray-400 px-4 py-2 rounded text-red-600"
            >
              ❤️ Wishlist
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
              Place Order
            </button>
          </div>

          <Link to="/products" className="block text-blue-600 mt-4 underline">
            ← Back to Products
          </Link>
        </div>
      </div>

      <div className="mt-8 border-t pt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Customer Reviews</h3>
        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
          <li>⭐️⭐️⭐️⭐️⭐️ Beautiful and elegant!</li>
          <li>⭐️⭐️⭐️⭐️ Very good quality, worth the price.</li>
          <li>⭐️⭐️⭐️⭐️ Looks amazing in person!</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
