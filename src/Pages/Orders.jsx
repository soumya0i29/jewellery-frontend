import React, { useState, useEffect } from "react";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const cancelOrder = (orderId) => {
    const updatedOrders = orders.map(order => {
      if (order.orderId === orderId && (order.status === "Placed" || !order.status)) {
        return { ...order, status: "Cancelled" };
      }
      return order;
    });
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    alert("Order cancelled successfully!");

    const activeOrders = updatedOrders.filter(o => o.status !== "Cancelled");
    localStorage.setItem("ordersCount", activeOrders.length.toString());
    window.dispatchEvent(new Event("storage"));
  };

  const formatPrice = (price) => {
    if (price === undefined || price === null) return '0';
    return price.toLocaleString();
  };

  return (
    <div className="orders-bg">
      <div className="orders-container">
        <h2 className="orders-title">My Orders</h2>
        {orders.length === 0 ? (
          <div className="orders-empty">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2919/2919600.png"
              alt="No Orders"
              className="orders-empty-img"
            />
            <p>You haven't placed any orders yet!</p>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-yellow-700">#{order.orderId}</span>
                  <span className={`px-3 py-1 rounded-full text-white ${order.status === 'Cancelled' ? 'bg-red-500' : 'bg-green-500'}`}>
                    {order.status || 'Placed'}
                  </span>
                </div>

                {/* ✅ Correct Order Time Display */}
                <p className="text-gray-600 mb-2">
                  Ordered on: {new Date(order.time).toLocaleString()}
                </p>

                <div className="flex items-center gap-4 mb-3">
                  <img src={order.image || '/images/placeholder.png'} alt={order.name} className="w-20 h-20 object-contain" />
                  <div>
                    <h4 className="font-semibold">{order.name}</h4>
                    <p className="text-gray-700">₹{formatPrice(order.price)}</p>
                  </div>
                </div>

                <p className="font-bold text-right text-red-600">Total: ₹{formatPrice(order.price)}</p>

                {order.status !== "Cancelled" && (
                  <div className="text-right mt-3">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                      onClick={() => cancelOrder(order.orderId)}
                    >
                      Cancel Order
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
