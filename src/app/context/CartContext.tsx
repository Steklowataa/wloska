"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { CartItem } from "@/utils/type";

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  totalQuantity: number;
  removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedItems = localStorage.getItem("cartItems");
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error("Error reading cart items from localStorage", error);
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("cartItems", JSON.stringify(items));
    }
  }, [items, isHydrated]);

  const addToCart = (item: CartItem) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(i => i.id === item.id);

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        const existingItem = newItems[existingItemIndex];
        newItems[existingItemIndex] = { ...existingItem, quantity: existingItem.quantity + item.quantity };
        return newItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, totalQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
