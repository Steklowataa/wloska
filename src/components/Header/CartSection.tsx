"use client";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import SummeryCart from "../SummeryCart";
import { useState, useRef } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

type CartProps = {
  isScrolled: boolean;
  isHovered: boolean;
};

export default function CartSection({ isScrolled, isHovered }: CartProps) {
  const { totalQuantity, items } = useCart();
  const [showSummeryCart, setShowSummeryCart] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { language, setLanguage } = useLanguage();

  const handleMouseEnterCart = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowSummeryCart(true);
  };

  const handleMouseLeaveCart = () => {
    timeoutRef.current = setTimeout(() => setShowSummeryCart(false), 200);
  };

  return (
    <div className={`flex items-center gap-2 transition-all duration-300 ${isScrolled && !isHovered ? "justify-end w-auto ml-auto" : "justify-end w-1/3"}`}>
        {/* Cart icon + summary */}
        <div className="relative" onMouseEnter={handleMouseEnterCart} onMouseLeave={handleMouseLeaveCart}>
        <div className="relative z-20">
          <Image
            src="/images/cart-icon.svg"
            width={30}
            height={30}
            alt="Cart icon"/>
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#EE0498] text-white text-xs z-50 font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalQuantity}
            </span>
          )}
        </div>

        {showSummeryCart && (
          <div className="absolute right-0 top-0 z-40">
            <SummeryCart
              items={items.map((item) => ({
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.basePrice,
                quantity: item.quantity,
                totalPrice: item.totalPrice,
                sauces: item.sauces,
                extras: item.extras,
              }))}/>
          </div>
        )}
      </div>
      {/* Language select */}
      {(!isScrolled || isHovered) && (
        <div className="relative inline-block">
          <select
            name="change"
            id="change"
            className="bg-[#FF30B3] text-white text-sm font-bold 
                       w-[80px] h-[40px] rounded-full 
                       pl-3 pr-8 appearance-none cursor-pointer
                       focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value as "PL" | "EN" | "UK")}>
            <option value="PL"> PL</option>
            <option value="EN">EN</option>
            <option value="UK">UK</option>
          </select>

          {/* Custom arrow */}
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"/>
            </svg>
          </span>
        </div>
      )}
    </div>
  );
}
