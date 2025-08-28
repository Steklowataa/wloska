"use client"
import { useOrder, type Customer } from "@/app/context/OrderContext"
import { useState, useEffect } from "react"
import Changes from "./Changes"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: "600"
})

export default function PaymentSwitchButton() {
  const { customer, setCustomer } = useOrder()
  const [choice, setChoice] = useState<string>(customer.payment ?? "Gotówka")

  const handleChoice = (newChoice: string) => {
    setChoice(newChoice);
    setCustomer({ payment: newChoice });
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-2 mt-4 w-[400px] pl-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="Gotówka"
            checked={choice === "Gotówka"}
            onChange={() => handleChoice("Gotówka")}
            className="appearance-none w-5 h-5 rounded-full border-2 border-gray-400 
                       checked:border-green-500 checked:bg-green-500 cursor-pointer"
          />
          <span className={`${choice === "Gotówka" ? "font-semibold" : "text-gray-400"}`}>
            Gotówka
          </span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="Karta"
            checked={choice === "Karta"}
            onChange={() => handleChoice("Karta")}
            className="appearance-none w-5 h-5 rounded-full border-2 border-gray-400 
                       checked:border-green-500 checked:bg-green-500 cursor-pointer"
          />
          <span className={`${choice === "Karta" ? `font-semibold ${inter.className}` : "text-gray-400"}`}>
            Karta
          </span>
        </label>
      </div>

      <div className="mt-4">
        {choice === "Gotówka" && <Changes />}
        {choice === "Karta" && (
          <h2 className={`${inter.className} pl-6 mt-6`}>
            Płatność kartą odbywa się wyłącznie przy odbiorze u kuriera (terminal).
          </h2>
        )}
      </div>
    </>
  )
}
