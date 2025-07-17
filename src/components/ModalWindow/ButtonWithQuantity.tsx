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
    <div className="relative flex justify-between items-center mb-6 px-4 py-6 overflow-hidden">
      <div
        className="absolute w-[50px] h-[50px] rounded-full blur-lg opacity-80 left-4 top-4 z-0"
        style={{ backgroundColor: colors.zieliony }}
      ></div>
      <div
        className="absolute w-[50px] h-[50px] rounded-full blur-lg opacity-60 left-30 top-2 z-0"
        style={{ backgroundColor: colors.zieliony }} ></div>
      <div className="z-10">
        <p className={`${inter.className} text-white text-[12px]`}>Czas dostawy</p>
        <p className={`${inter2.className} text-white text-[16px] mt-1`}>30 min</p>
      </div>
      <div className="z-10">
        <p className={`${inter.className} text-white text-[12px]`}>Suma</p>
        <p className={`${inter2.className} text-white text-[16px] mt-1`}>
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
