"use client"
import Input from "./Input"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: "600"
})

type AdressFieldProps = {
  label: string
  placeholder: string
}

function AdressForm({ label, placeholder }: AdressFieldProps) {
  return (
    <div className="flex flex-col">
      <label className={`${inter.className} text-white mb-2`}>
        {label}
      </label>
      <Input value={placeholder} />
    </div>
  )
}

export default function AdressDataForm() {
  const adress = [
    { label: "Nazwa ulicy", placeholder: "3go Maja" },
    { label: "Numer ulicy", placeholder: "11" },
    { label: "Numer mieszkania", placeholder: "11" },
    { label: "Piętro (opcjonalnie)", placeholder: "1" },
    { label: "Klatka (opcjonalnie)", placeholder: "2" }
  ]

  return (
    <div className="p-6 rounded-[20px] w-[800px] bg-[#28091D]/40 border border-white">
      <h2
        className={`${inter.className} text-4xl font-extrabold text-center mb-8`}
        style={{
          WebkitTextStroke: "2px white",
          color: "transparent"
        }}>
        Adres
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {adress.slice(0, 3).map((field, index) => (
          <AdressForm key={index} {...field} />
        ))}

        <div className="col-span-1">
          <AdressForm {...adress[3]} />
        </div>
        <div className="col-span-1">
          <AdressForm {...adress[4]} />
        </div>
      </div>
    </div>
  )
}
