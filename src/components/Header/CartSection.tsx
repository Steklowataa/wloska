"use client";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import SummeryCart from "../SummeryCart"
import { useState, useRef } from "react";

type CartProps = {
  isScrolled: boolean;
  isHovered: boolean;
};

export default function CartSection({ isScrolled, isHovered }: CartProps) {
  const { totalQuantity, items } = useCart();
  const [showSummeryCart, setShowSummeryCart] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterCart = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowSummeryCart(true);
  };

  const handleMouseLeaveCart = () => {
    timeoutRef.current = setTimeout(() => setShowSummeryCart(false), 200);
  };

  return (
    <div
      className={`flex items-center gap-2 transition-all duration-300
        ${isScrolled && !isHovered ? "justify-end w-auto ml-auto" : "justify-end w-1/3"}
      `}
    >
      {(!isScrolled || isHovered) && (
        <select
          name="change"
          id="change"
          className="bg-[#FF30B3] w-[60px] h-[40px] rounded-[50px] pl-2 pr-2"
        >
          <option value="PL">PL</option>
          <option value="EN">EN</option>
          <option value="UK">UK</option>
        </select>
      )}

      <div
        className="relative"
        onMouseEnter={handleMouseEnterCart}
        onMouseLeave={handleMouseLeaveCart}
      >
        <div className="relative z-20">
          <Image
            src="/images/cart-icon.svg"
            width={30}
            height={30}
            alt="Cart icon"
          />
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
                name: item.name,
                image: item.image,
                price: item.basePrice,
                quantity: item.quantity,
                totalPrice: item.totalPrice,
                sauces: item.sauces,
                extras: item.extras,
                additions: [
                  ...(item.sauces?.map((s) => s.name) || []),
                  ...(item.extras?.map((s) => s.name) || []),
                ],
                setQuantity: () => {},
              }))}
            />
          </div>
        )}
      </div>
    </div>
  );
}
