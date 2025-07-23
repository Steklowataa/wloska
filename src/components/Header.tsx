"use client"
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import SummeryCart from "./SummeryCart";
import { useState } from "react";

export default function Header() {
    const { totalQuantity, items } = useCart();
    console.log(items)
    const [showSummeryCart, setShowSummeryCart] = useState(false);

    return (
        <div className="bg-[rgba(83,52,77,0.4)] rounded-3xl flex items-center justify-center flex-row gap-x-20 
        ml-[150px] mr-[150px] mt-[10px] h-[56px] border-2 border-[#7A0950] relative">
                <p className="cursor-pointer">Home</p>
            <Link href="/menu">
                <p className="cursor-pointer">Menu</p>
            </Link>
            <div
                className="relative"
                onMouseEnter={() => setShowSummeryCart(true)}
                onMouseLeave={() => setShowSummeryCart(false)}>
            <Link href="/basket">
                <Image
                    src="images/cart-icon.svg"
                    width={30}
                    height={30}
                     alt="Cart icon"/>
            </Link>
            {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs z-50 font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {totalQuantity}
                </span>
            )}
            {showSummeryCart &&  (
                <SummeryCart items={items} />
            )}
            </div>
        </div>
    );
}
