"use client";
import { Inter } from "next/font/google";
import ToggleIncrease from "./ToggleIncrease";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const inter2 = Inter({ subsets: ["latin"], weight: "600" });

type ButtonWithQuantityProps = {
    price: number;
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    allowZero?: boolean;
};

export default function ButtonWithQuantity({ 
    price, 
    quantity, 
    setQuantity, 
    allowZero = false 
}: ButtonWithQuantityProps) {
    const singlePrice = price
    
    return (
        <div className="flex justify-between items-center mb-6">
            <div>
                <p className={`${inter.className} text-gray-400 text-[12px]`}>Czas dostawy</p>
                <p className={`${inter2.className} text-white text-[16px] mt-1`}>30 min</p>
            </div>
            <div>
                <p className={`${inter.className} text-gray-400 text-[12px]`}>Suma</p>
                <p className={`${inter2.className} text-white text-[16px] mt-1`}>{singlePrice}zł</p>
            </div>
            <ToggleIncrease 
                quantity={quantity} 
                setQuantity={setQuantity} 
                allowZero={allowZero}
            />
        </div>
    );
}