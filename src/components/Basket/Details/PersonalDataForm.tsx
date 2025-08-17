"use client"
import Input from "./Input"
import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ["latin"],
    weight: "600"
})

type FormFieldProps = {
    label: string,
    placeholder: string
}


function FormField({label, placeholder} : FormFieldProps) {
    return (
        <div className="mb-6 ">
            <div className={`${inter.className} mb-6`}>{label}</div>
            <Input value={placeholder} />
        </div>
    )
}
export default function PersonalDataForm() {
    const fields = [
        { label: "Imię i nazwisko", placeholder: "Imię i nazwisko" },
        { label: "Numer telefonu", placeholder: "Numer telefonu" },
        { label: "Email", placeholder: "Email" }
      ]

    return (
        <div className="grid grid-col-1 bg-[#28091D]/40 border border-white w-[336px] h-[435px] rounded-[20px] items-center justify-center">

            <h2 className={`${inter.className} text-[30px] text-center mb-4`} style={{
          WebkitTextStroke: "2px white",
          color: "transparent"
        }}>
                Dane Osobowe
            </h2>
        {fields.map((field, index) => (
          <FormField key={index} {...field} />
        ))}
      </div>
    )
}