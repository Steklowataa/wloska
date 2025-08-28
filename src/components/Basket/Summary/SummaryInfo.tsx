"use client"

import { useCart } from "@/app/context/CartContext"
import { useOrder } from "@/app/context/OrderContext"
import { Inter } from "next/font/google"
import { useSearchParams } from "next/navigation"

const inter = Inter({ subsets: ["latin"], weight: "600" })
const inter2 = Inter({ subsets: ["latin"], weight: "400" })

export default function SummaryInfo() {
  const { items } = useCart()
  const { customer } = useOrder()

  const searchParams = useSearchParams()
  const orderNumber = searchParams.get("orderNumber")

  const totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0)

  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-10">
      <div className="flex flex-col items-center text-[20px] border border-white rounded-[20px] bg-[#28091D]/60 p-6 w-[600px]">
        <p className={`${inter.className} text-2xl`}>Dziękujemy za zamówienie!</p>
        <p className={`${inter.className} text-lg mt-1`}>Czas oczekiwania 40-60 minut</p>
        <p className={`${inter2.className} text-[16px] mt-3`}>Numer Twojego zamówienia: <strong>{orderNumber}</strong></p>
      </div>

      {/* Koszyk */}
      <div className="flex flex-col border border-white rounded-[20px] bg-[#28091D]/40 p-6 w-[600px]">
        <h2 className={`${inter.className} text-xl mb-4`}>Twój koszyk:</h2>
        {items.length === 0 ? (
          <p className={`${inter2.className}`}>Koszyk jest pusty</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {items.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name}</span>
                <span>{item.totalPrice} zł</span>
              </li>
            ))}
          </ul>
        )}
        <p className={`${inter.className} text-right mt-4`}>Razem: {totalPrice} zł</p>
      </div>

      {/* Dane klienta */}
      <div className="flex flex-col border border-white rounded-[20px] bg-[#28091D]/40 p-6 w-[600px]">
        <h2 className={`${inter.className} text-xl mb-4`}>Dane klienta:</h2>
        <div className="grid grid-cols-2 gap-2">
          <p><strong>Imię i nazwisko:</strong> {customer.name}</p>
          <p><strong>Telefon:</strong> {customer.phone}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Ulica:</strong> {customer.streetName} {customer.streetNumber}</p>
          <p><strong>Mieszkanie:</strong> {customer.flatNumber}</p>
          {customer.floorNumber && <p><strong>Piętro:</strong> {customer.floorNumber}</p>}
          {customer.staircase && <p><strong>Klatka:</strong> {customer.staircase}</p>}
          {customer.promoCode && <p><strong>Promo kod:</strong> {customer.promoCode}</p>}
          {customer.message && <p><strong>Uwagi:</strong> {customer.message}</p>}
          {customer.payment && <p><strong>Płatność:</strong> {customer.payment}</p>}
          {customer.change && <p><strong>Reszta od:</strong> {customer.change} zł</p>}
        </div>
      </div>
    </div>
  )
}
