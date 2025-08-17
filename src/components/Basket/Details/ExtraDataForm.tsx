"use client"
import Input from "./Input"
import { Inter } from "next/font/google"
import Image from "next/image"

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
            <label className={`${inter.className} mb-2 text-white`}>{label}</label>
            <Input value={placeholder}/>
        </div>
    )
}

export default function ExtraDataForm() {
    const fields = [
        {label: "PROMOKOD", placeholder: "Imię i nazwisko.."},
        {label: "Komentarz (opcjonalnie)", placeholder: "Imię i nazwisko.."}
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
                    <ExtraData key={index} {...field}/>
                ))}
            </div>
        </div>
    )
}