"use client"
import Input from "./Input"
import { Inter } from "next/font/google"
import Image from "next/image"
import { useOrder, type Customer } from "@/app/context/OrderContext"

const inter = Inter({
  subsets: ["latin"],
  weight: "600"
})

type ExtraDataProps = {
  label: string
  placeholder: string
  fieldKey: keyof Customer
}

function ExtraData({ label, placeholder, fieldKey }: ExtraDataProps) {
  const { customer, setCustomer } = useOrder()

  return (
    <div className="flex flex-col">
      <label className={`${inter.className} mb-2 text-white`}>{label}</label>
      <Input
        value={customer[fieldKey] ?? ""}
        onChange={(e) => setCustomer({ [fieldKey]: e.target.value })}
        placeholder={placeholder}
      />
    </div>
  )
}

export default function ExtraDataForm() {
  const fields: ExtraDataProps[] = [
    { label: "PROMOKOD", placeholder: "np. YXC34RX", fieldKey: "promoCode" },
    { label: "Komentarz (opcjonalnie)", placeholder: "Proszę nie używać dzwonka", fieldKey: "message" }
  ]

  return (
    <div className="relative w-[550px] h-[400px]">
      <Image
        alt="background"
        src="/images/rectangle.png"
        width={600}
        height={400}
        className="absolute mt-0"
      />
      <div className="absolute inset-0 grid grid-cols-2 gap-x-3 pl-4 pr-6 mt-18">
        {fields.map((field, index) => (
          <ExtraData key={index} {...field} />
        ))}
      </div>
    </div>
  )
}
