"use client";
import { Inter } from "next/font/google";
import { useCart } from "@/app/context/CartContext";
import BackgroundBlobsCart from "../BackgroundBlobsCart";
import EmptyCart from "./EmptyCart";
import CartItemProducts from "./CartItemProducts";
import CartSummaryProducts from "./CartSummaryProducts";

const interBold2 = Inter({ subsets: ["latin"], weight: "800" });

export default function ListOfProducts() {  
  const { items, removeFromCart } = useCart();

  if (items.length === 0) {
    return <EmptyCart />;
  }

  const totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <>
      <BackgroundBlobsCart />
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-[#28091D]/40 rounded-xl shadow-lg">
        <div className="flex items-center justify-center">
          <h1 className={`${interBold2.className} text-2xl mb-6`}>Twoje zamówienie</h1>
        </div>
        <div className="flex flex-col gap-6">
          {items.map((item, index) => (
            <CartItemProducts 
              key={index} 
              item={item} 
              onRemove={removeFromCart} 
            />
          ))}
          <CartSummaryProducts totalPrice={totalPrice} />
        </div>
      </div>
    </>
  );
}