import React, { useEffect, useState } from "react";
import "./Orders.css";

const statusColors = {
  Placed: "#87c0cd",
  Delivered: "#50d890",
  Shipped: "#ffd166",
  Cancelled: "#ff6f61",
};

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const userOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(userOrders);
  }, []);

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
            {orders.map((order) => (
              <div className="order-card" key={order.id}>
                <div className="order-header">
                  <span className="order-id">#{order.id}</span>
                  <span
                    className="order-status"
                    style={{
                      background: statusColors[order.status || "Placed"] + "22",
                      color: statusColors[order.status || "Placed"],
                    }}
                  >
                    {order.status || "Placed"}
                  </span>
                </div>
                <div className="order-date">Ordered on: {order.date}</div>
                <div className="order-items">
                  {order.items.map((item, idx) => (
                    <div className="order-item" key={idx}>
                      <img src={item.image} alt={item.name} />
                      <div className="order-item-info">
                        <div className="order-item-name">{item.name}</div>
                        <div className="order-item-qty">
                          Qty: <b>{item.qty}</b>
                        </div>
                        <div className="order-item-price">
                          ₹{item.price.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="order-footer">
                  <div className="order-total">
                    Total: <span>₹{order.total.toLocaleString()}</span>
                  </div>
                  {/* Add buttons if needed */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;