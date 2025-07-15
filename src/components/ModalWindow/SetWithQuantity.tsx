"use client";
import { Inter } from "next/font/google";
import ToggleIncrease from "./ToggleIncrease";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });
const inter2 = Inter({ subsets: ["latin"], weight: "600" });

type Props = {
    name: string,
    price: number;
    quantity: number;
    setQuantity: (value: number) => void;
};

export default function SetWithQuantity({ name, price, quantity, setQuantity }: Props) {
    const singleSetPrice = quantity > 0 ? price / quantity : price;
    const zestawPrice = price + 7
    
    return (
        <>
            <h3 className={`${inter2.className} text-[20px] mb-2`}>Zestaw</h3>
            <h2 className={`${inter.className} text-[14px] mb-2 text-grayI`}>Zestaw {name}, z frytkami i ketchupem</h2>
            <div className="flex justify-between items-center mt-6">
                <div>
                    <p className={`${inter.className} text-grayI text-[12px]`}>Czas dostawy</p>
                    <p className={`${inter2.className} text-white text-[16px] mt-1`}>30 min</p>
                </div>
                <div>
                    <p className={`${inter.className} text-grayI text-[12px]`}>Suma</p>
                    <p className={`${inter2.className} text-white text-[16px] mt-1`}>{zestawPrice}zł</p>
                </div>
                <ToggleIncrease quantity={quantity} setQuantity={setQuantity} allowZero={true} />
            </div>
        </>
    );
}