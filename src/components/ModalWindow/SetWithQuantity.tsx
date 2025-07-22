"use client";
import { Inter } from "next/font/google";
import ToggleIncrease from "./ToggleIncrease";
import { colors } from "../../../lib/colors";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });
const inter2 = Inter({ subsets: ["latin"], weight: "600" });

type Props = {
    name: string;
    price: number;
    quantity: number;
    setQuantity: (value: number) => void;
};

export default function SetWithQuantity({ name, price, quantity, setQuantity }: Props) {
    const singleSetPrice = quantity > 0 ? price / quantity : price;
    const zestawPrice = price + 7;

    return (
        <div className="relative md:px-4 md:py-6 md:mb-[2px] mb-6 overflow-hidden">
            <div className="absolute rounded-full h-[60px] w-[80px] bg-[#68FF3A] top-5 left-5 blur-lg z-0 opacity-70 hidden md:block"></div>
            <div className="absolute rounded-full h-[50px] w-[50px] bg-[#68FF3A] top-20 left-30 blur-lg z-0 opacity-70 hidden md:block"></div>
            <div className="relative z-10 mb-4">
                <h3 className={`${inter2.className} text-[20px] mb-2`}>Zestaw</h3>
                <h2 className={`${inter.className} text-[14px] text-grayI`}>
                    Zestaw {name}, z frytkami i ketchupem
                </h2>
            </div>
            <div className="flex justify-between items-center relative z-10">
                <div>
                    <p className={`${inter.className} text-white md:text-[12px] text-[10px]`}>Czas dostawy</p>
                    <p className={`${inter2.className} text-white md:text-[16px] text-[12px] mt-1`}>30 min</p>
                </div>
        <div className="relative">
            <div className="absolute rounded-full h-[60px] w-[80px] bg-[#68FF3A] top-0 left-0 blur-lg z-0 opacity-70"></div>
            <h3 className={`${inter2.className} text-[20px] mb-2 z-10 relative`}>Zestaw</h3>
            <h2 className={`${inter.className} text-[14px] mb-2 text-grayI relative z-10`}>
                Zestaw {name}, z frytkami i ketchupem
            </h2>

            <div className="flex justify-between items-center mt-6 relative z-10">

                <div>
                    <p className={`${inter.className} text-white md:text-[12px] text-[10px]`}>Suma</p>
                    <p className={`${inter2.className} text-white md:text-[16px] text-[12px] mt-1`}>
                        {zestawPrice}zł
                    </p>
                </div>
                <div>
                    <ToggleIncrease
                        quantity={quantity}
                        setQuantity={setQuantity}
                        allowZero={true}
                    />
                </div>
                    <p className={`${inter.className} text-grayI text-[12px]`}>Suma</p>
                    <div className="absolute rounded-full h-[50px] w-[60px] bg-[#68FF3A] top-0 left-63 blur-lg z-0 opacity-70"></div>
                    <p className={`${inter2.className} text-white text-[16px] mt-1`}>
                        {zestawPrice}zł
                    </p>
                </div>
                <ToggleIncrease
                    quantity={quantity}
                    setQuantity={setQuantity}
                    allowZero={true}
                />
            </div>
        </div>
    );
}
