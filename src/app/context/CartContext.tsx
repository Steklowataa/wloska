"use client";
import { createContext, useContext, useState } from "react";

type Addition = string | { name: string };

export type CartItem = {
  id: string,
  name: string;
  img: string;
  quantity: number;
  description: string;
  type?: string;
  basePrice: number;
  sauces?: Addition[];
  extras?: Addition[];
  totalPrice: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "id">) => void;
  totalQuantity: number;
  removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "id">) => {
    console.log("ADDING TO CART:", item);
    const newItem = { ...item, id: crypto.randomUUID() }
    setItems((prev) => [...prev, newItem]);
  };

  const removeFromCart = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalQuantity = items.length;

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