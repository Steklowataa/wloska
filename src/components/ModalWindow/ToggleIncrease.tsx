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
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
  };
  
  export default function ToggleIncrease({ quantity, setQuantity }: ToggleIncreaseProps) {
    const increase = () => {
      setQuantity((prev) => prev + 1);
    };

    const decrease = () => {
        setQuantity(prev => prev > 1 ? prev - 1 : 1)
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