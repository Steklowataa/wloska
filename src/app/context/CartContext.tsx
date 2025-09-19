"use client";
import { createContext, useContext, useState } from "react";

export type CartItem = {
  id: string,
  name: string;
  image: string;
  quantity: number;
  description: string;
  type?: string;
  basePrice: number;
  sauces?: any[];
  extras?: any[];
  totalPrice: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  totalQuantity: number;
  removeFromCart: (name: string, sauces?: any[], extras?: any[]) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const newItem = {...item, id:crypto.randomUUID()}
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