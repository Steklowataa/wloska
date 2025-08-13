"use client"
import { Inter } from "next/font/google"

const interBold = Inter({
    subsets: ["latin"],
    weight: "600"
})

export default function NextButton({onNext}: {onNext: () => void}) {
    return (
        <button
            className={`${interBold.className} bg-[#7A0950] button-shadow-style text-white px-10 py-3 rounded-full hover:opacity-90 transition-opacity`}
            type="button"
          >
            Dalej →
          </button>
    )
}