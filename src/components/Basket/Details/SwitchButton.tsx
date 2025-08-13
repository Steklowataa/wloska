"use client"
import { Inter } from "next/font/google"
import { useState } from "react"

const inter = Inter({
    subsets: ["latin"],
    weight: "600"
})
export default function SwitchButton() {
    const [isDelivery, setIsDelivery] = useState(false)
    
    return (
        // <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-500">
            <div className="flex items-center justify-center">
                <button
                    onClick={() => setIsDelivery(!isDelivery)}
                    className="relative flex items-center bg-[#4A4848] rounded-full w-[225px] h-[60px] transition-all duration-300 ease-in-out shadow-[inset_0_3px_6px_rgba(0,0,0,0.5),0_25px_90px_-12px_rgba(0,0,0,0.6)] border-white border-1">
                    <div
                        className={`absolute top-0 bottom-0 rounded-full transition-all duration-300 ease-in-out bg-[#E01094] border border-white shadow-[inset_0_3px_6px_rgba(0,0,0,0.5),0_25px_90px_-12px_rgba(0,0,0,0.6)] ${
                            !isDelivery 
                                ? 'left-0 right-[50%]' 
                                : 'left-[50%] right-0'
                        }`}
                    />
                    
                    <div className="relative z-10 flex w-full">
                        <div className="flex-1 text-center">
                            <span className={`${inter.className} text-[16px] font-semibold transition-colors duration-300 ${
                                !isDelivery ? 'text-white' : 'text-gray-300'
                            }`}>
                                Dostawa
                            </span>
                        </div>
                        <div className="flex-1 text-center">
                            <span className={`${inter.className} text-[16px] font-semibold transition-colors duration-300 ${
                                isDelivery ? 'text-white' : 'text-gray-300'
                            }`}>
                                Odbiór
                            </span>
                        </div>
                    </div>
                </button>
            </div>
    )
}