import { Inter } from "next/font/google";
import NextButton from "../NextButton";

const interBold2 = Inter({ subsets: ["latin"], weight: "800" });

interface CartSummaryProps {
  totalPrice: number;
}

export default function CartSummaryProducts({ totalPrice }: CartSummaryProps) {
  return (
    <div className="flex justify-between items-center mt-6 pt-4">
      <p className={`${interBold2.className} text-xl`}>Razem: {totalPrice} zł</p>
      <NextButton />
    </div>
  );
}