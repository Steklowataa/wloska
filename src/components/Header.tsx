"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import SummeryCart from "./SummeryCart";
import { useState, useRef } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "600"
});

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
    }, 200);
  };

  return (
    <div className="relative z-100 sticky top-0">
      <div
        className={`${inter.className} rounded-3xl flex items-center 
        ml-[150px] mr-[150px] mt-[10px] h-[56px] px-6 bg-gradient-to-r from-[#FF30B3]/10 to-[#7A0950]/10 bg-clip-padding backdrop-blur-md backdrop-saturate-100 backdrop-contrast-100 border border-white/50`}
      >
        <div className="bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100"></div>
        <div className="w-1/3 flex items-center">
          {/* <Image src="/images/logo.svg" alt="Logo" width={80} height={40} /> */}
        </div>

        <div className="w-1/3 flex justify-center gap-x-20">
          <Link href="/home">
          <p className="cursor-pointer">Home</p>
          </Link>
          <Link href="/menu">
            <p className="cursor-pointer">Menu</p>
          </Link>
          {/*TO DO */}
          {/* Dodac link do kontaktow */}
          <p className="cursor-pointer">Kontakt</p>
        </div>


        <div className="w-1/3 flex justify-end items-center gap-x-6">
              <select name="change" id="change" className="bg-[#FF30B3] w-[60px] h-[40px] rounded-[50px] pl-2 pr-2">
                    <option value="50">PL</option>
                    <option value="100">EN</option>
                    <option value="200">UK</option>
                </select>

          {/* Koszyk */}
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
      </div>
    </div>
  );
}
