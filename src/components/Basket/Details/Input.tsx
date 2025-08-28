"use client"
import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ["latin"],
    weight: "400"
})

type InputProps = {
    value: string | number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export default function Input({ value, onChange, placeholder }: InputProps) {
    return (
        <>
        <div>
            <input className={`w-[252px] h-[48px] rounded-[12px] bg-black border border-white p-4`} 
                value={value}
                onChange={onChange}
                placeholder={placeholder}/>
        </div>
        </>
    )
}