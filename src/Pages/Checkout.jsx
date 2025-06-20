import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const placeOrder = () => {
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];

    const newOrder = {
      id: `ORD-${Date.now()}`,
      time: new Date().toISOString(),
      items: cartItems.map(item => ({
        name: item.name,
        price: item.price,
        image: item.image
      })),
      total: totalPrice,
      status: "Placed"
    };

    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    localStorage.setItem('ordersCount', updatedOrders.length.toString());

    alert('Order placed successfully!');
    clearCart();
    navigate('/orders');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-white p-4 rounded shadow">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-700">₹{item.price.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
          <p className="text-right font-bold text-lg">Total: ₹{totalPrice.toLocaleString()}</p>
          <div className="text-right">
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
