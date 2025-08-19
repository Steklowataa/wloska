"use client"
import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ["latin"],
    weight: "600"
})

const inter2 = Inter({
    subsets: ["latin"],
    weight: "400"
})
export default function SummaryInfo() {
    return (
        <>
            <div className="flex items-center justify-center flex-col text-[20px] border border-white 
            rounded-[20px] bg-[#28091D]/60 mt-10">
                <p className={`${inter.className}`}>Dziękujemy za zamówienie!</p>
                <p className={`${inter.className}`}>Czas oczekiwania 40-60 minut</p>
                <p className={`${inter2.className} text-[16px] mt-5`}>Numer Twojego zamówienia </p>
            </div>
        </>
    )
}