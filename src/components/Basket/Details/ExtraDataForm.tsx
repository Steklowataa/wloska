"use client"
import Input from "./Input"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: "600"
})

type ExtraDataProps = {
    label: string,
    placeholder: string
}
function ExtraData({label, placeholder}: ExtraDataProps) {
    return (
        <div className="flex flex-col">
            <label className={`${inter.className} mb-2`}>{label}</label>
            <Input value={placeholder}/>
        </div>
    )
}

export default function ExtraDataForm() {
    const fields = [
        {label: "PROMOKOD", placeholder: "np. 3A45RZ"},
        {label: "Komentarz (opcjonalnie)", placeholder: "np. proszę nie uzywać dzwonka"}
    ]
    return (
        <div className="grid grid-cols-2 gap-5 w-[600px] rounded-[20px] bg-[#28091D]/40 border border-white p-6">
            {fields.map((field, index) => (
                <ExtraData key={index} {...field}/>
            ))}
        </div>
    )
}