import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  // 1. Load cart from localStorage initially
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // 2. Whenever cart changes, save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        // If product already in cart, increase quantity
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty ? item.qty + 1 : 2 }
            : item
        );
      } else {
        // If not in cart, add with qty 1
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  }

  function removeFromCart(id) {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function updateQty(id, qty) {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, qty } : item
      )
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}