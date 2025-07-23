"use client";
import { Inter } from "next/font/google";
import ToggleIncrease from "./ToggleIncrease";
import { colors } from "../../../lib/colors";

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
  allowZero = false,
}: ButtonWithQuantityProps) {
  const singlePrice = price;

  return (
    <div className="relative flex justify-between items-center md:px-4 md:py-6 md:mb-[2px] mb-6 overflow-hidden">
      <div
        className="absolute w-[50px] h-[50px] rounded-full blur-lg opacity-80 left-5 top-5 z-0 bg-[#68FF3A] hidden md:block"
      ></div>
      <div
        className="absolute w-[50px] h-[50px] rounded-full blur-lg opacity-70 left-[120px] top-5 z-0 bg-[#68FF3A] hidden md:block"
      ></div>
      <div className="z-10">
        <p className={`${inter.className} text-white md:text-[12px] text-[10px]`}>Czas dostawy</p>
        <p className={`${inter2.className} text-white md:text-[16px] text-[12px] mt-1`}>30 min</p>
      </div>
      <div className="z-10">
        <p className={`${inter.className} text-white md:text-[12px] text-[10px]`}>Suma</p>
        <p className={`${inter2.className} text-white md:text-[16px] text-[12px] mt-1`}>
          {singlePrice}zł
        </p>
      </div>
      <div className="z-10">
        <ToggleIncrease
          quantity={quantity}
          setQuantity={setQuantity}
          allowZero={allowZero}
        />
      </div>
    </div>
  );
}
