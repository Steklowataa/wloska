"use client"
import { useState } from "react"
import Changes from "./Changes"

export default function PaymentSwitchButton() {
    const [choice, setChoice] = useState<string>("Gotówka")

    const handleChoice = (newChoice: string) => {
        setChoice(newChoice)
    }

    return (
        <>
            <div className="grid grid-cols-2 gap-2 mt-4 w-[400px] pl-6">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                        type="radio" 
                        name="payment" 
                        value="Gotówka"
                        checked={choice === "Gotówka"}
                        onChange={() => handleChoice("Gotówka")}
                        className="appearance-none w-5 h-5 rounded-full border-2 border-gray-400 
                                   checked:border-green-500 checked:bg-green-500 cursor-pointer"
                    />
                    <span className={`${choice === "Gotówka" ? "font-semibold" : "  text-gray-400"}`}>
                        Gotówka
                    </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                        type="radio" 
                        name="payment" 
                        value="Karta"
                        checked={choice === "Karta"}
                        onChange={() => handleChoice("Karta")}
                        className="appearance-none w-5 h-5 rounded-full border-2 border-gray-400 
                                   checked:border-green-500 checked:bg-green-500 cursor-pointer"
                    />
                    <span className={`${choice === "Karta" ? "font-semibold" : "text-gray-400"}`}>
                        Karta
                    </span>
                </label>
            </div>

            <div className="mt-4">
                {choice === "Gotówka" && 
                    <div>
                        <Changes />
                    </div>}
                {choice === "Karta" && <h2 className="text-green-600 font-semibold">Karta</h2>}
            </div>
        </>
    )
}
