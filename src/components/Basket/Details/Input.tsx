"use client"
import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ["latin"],
    weight: "400"
})

export default function Input({ value }: {value: string}) {
    return (
        <>
        <div>
            <input className={`w-[252px] h-[48px] rounded-[12px] bg-black border border-white p-4`} placeholder={value}/>
        </div>
        </>
    )
}