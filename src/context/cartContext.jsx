import AddedCartToast from "@/components/UI/AddedCartToast";
import { useRouter } from "next/router";
import React, { useState, createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem._id === item._id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    toast.custom((t) => <AddedCartToast t={t} item={item} />);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem._id !== itemId);
    setCartItems(updatedCart);
    const findItem = cartItems.find((cartItem) => cartItem._id === itemId);
    toast.success(`Item (${findItem.title}) removed from cart successfully!`);
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem._id === itemId) {
        const newQuantity = cartItem.quantity + 1;
        const limitedQuantity = Math.min(newQuantity, cartItem.stock);
        return { ...cartItem, quantity: limitedQuantity };
      } else {
        return cartItem;
      }
    });
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem._id === itemId && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCartItems(updatedCart);
  };

  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    setCartItems,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
