"use client"
import Input from "./Input"
import { Inter } from "next/font/google"
import { useOrder, type Customer } from "@/app/context/OrderContext"

const inter = Inter({
  subsets: ["latin"],
  weight: "600"
})

type AdressFieldProps = {
  label: string
  placeholder: string
  fieldKey: keyof Customer
}

function AdressForm({ label, placeholder, fieldKey }: AdressFieldProps) {
  const { customer, setCustomer } = useOrder()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericFields: (keyof Customer)[] = [
      "streetNumber",
      "flatNumber",
      "floorNumber",
      "staircase"
    ]

    const value = numericFields.includes(fieldKey) ? Number(e.target.value) : e.target.value
    setCustomer({ [fieldKey]: value })
  }

  return (
    <div className="flex flex-col">
      <label className={`${inter.className} text-white mb-2`}>{label}</label>
      <Input
        value={customer[fieldKey] ?? ""}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default function AdressDataForm() {
  const adress: AdressFieldProps[] = [
    { label: "Nazwa ulicy", placeholder: "3go Maja", fieldKey: "streetName" },
    { label: "Numer ulicy", placeholder: "11", fieldKey: "streetNumber" },
    { label: "Numer mieszkania", placeholder: "11", fieldKey: "flatNumber" },
    { label: "Piętro (opcjonalnie)", placeholder: "1", fieldKey: "floorNumber" },
    { label: "Klatka (opcjonalnie)", placeholder: "2", fieldKey: "staircase" }
  ]

  return (
    <div className="pl-3 pr-7 rounded-[20px] w-[800px] h-[380px] bg-[#28091D]/40 border border-white">
      <h2
        className={`${inter.className} text-4xl font-extrabold text-center mb-8`}
        style={{
          WebkitTextStroke: "2px white",
          color: "transparent"
        }}
      >
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
