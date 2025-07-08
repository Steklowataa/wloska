"use client"
import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ["latin"],
    weight: "400"
})

const inter2 = Inter({
    subsets: ["latin"],
    weight: "600"
})

type ToggleIncreaseProps = {
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>> | ((value: number) => void);
    allowZero?: boolean;
};
  
export default function ToggleIncrease({ quantity, setQuantity, allowZero = false }: ToggleIncreaseProps) {
    const increase = () => {
        if (typeof setQuantity === 'function') {
            if (setQuantity.length === 1) {
                setQuantity(quantity + 1);
            } else {
                (setQuantity as React.Dispatch<React.SetStateAction<number>>)((prev) => prev + 1);
            }
        }
    };

    const decrease = () => {
        const newValue = allowZero ? Math.max(0, quantity - 1) : Math.max(1, quantity - 1);
        
        if (typeof setQuantity === 'function') {
            if (setQuantity.length === 1) {
                setQuantity(newValue);
            } else {
                (setQuantity as React.Dispatch<React.SetStateAction<number>>)(() => newValue);
            }
        }
    }

    return (
        <div className="flex items-center bg-gray-600 rounded-full px-4 py-2">
            <button 
                onClick={decrease}
                className="text-white text-[18px] w-8 h-8 flex items-center justify-center hover:bg-gray-500 rounded-full transition-colors"
            >
                −
            </button>
            
            <span className={`${inter2.className} text-white text-[18px] mx-4 min-w-[20px] text-center`}>
                {quantity}
            </span>
            
            <button 
                onClick={increase}
                className="text-white text-[18px] w-8 h-8 flex items-center justify-center hover:bg-gray-500 rounded-full transition-colors"
            >
                +
            </button>
        </div>
    )
}