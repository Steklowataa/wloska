"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import SummeryCart from "./SummeryCart";
import { useState, useRef } from "react";

export default function Header() {
  const { totalQuantity, items } = useCart();
  const [showSummeryCart, setShowSummeryCart] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowSummeryCart(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowSummeryCart(false);
    }, 200); // opcjonalne opóźnienie
  };

  return (
    <div className="relative z-100">
      <div className="bg-[rgba(83,52,77,0.4)] rounded-3xl flex items-center justify-center flex-row gap-x-20 
        ml-[150px] mr-[150px] mt-[10px] h-[56px] border-2 border-[#7A0950]">
        <p className="cursor-pointer">Home</p>
        <Link href="/menu">
          <p className="cursor-pointer">Menu</p>
        </Link>

        {/* Obszar koszyka z menu */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative z-20">
            <Link href="/basket">
              <Image
                src="images/cart-icon.svg"
                width={30}
                height={30}
                alt="Cart icon"
              />
            </Link>
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs z-50 font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </div>

          {/* Menu wysuwane */}
          {showSummeryCart && (
            <div className="absolute -left-5 top-0 z-40">
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
    </div>
  );
}
