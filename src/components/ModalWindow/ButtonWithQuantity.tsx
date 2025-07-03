"use client"
import { Inter } from "next/font/google";
import { useState } from "react";
import ToggleIncrease from "./ToggleIncrease";

const inter = Inter({subsets: ["latin"], weight: ["400"]})
const inter2 = Inter({ subsets: ["latin"], weight: "600" });

type Props = {
    price: number,
    quantity: number,
    setQuantity: (value: number) => void
}
export default function ButtonWithQuantity({price, quantity, setQuantity}: Props) {
    return (
        <>
         <div className="flex justify-between items-center mb-6">
            <div>
              <p className={`${inter.className} text-gray-400 text-[12px]`}>Czas dostawy</p>
              <p className={`${inter2.className} text-white text-[16px]`}>30 min</p>
            </div>
            <div>
              <p className={`${inter.className} text-gray-400 text-[12px]`}>Suma</p>
              <p className={`${inter2.className} text-white text-[16px]`}>{price}zł</p>
            </div>
            <ToggleIncrease quantity={quantity} setQuantity={setQuantity} />
          </div>
        </>
    )
}