import { Inter } from "next/font/google";
import NextButton from "../NextButton";
import { useMenuByLangName } from "@/utils/useMenuByLangName";

const interBold2 = Inter({ subsets: ["latin"], weight: "800" });

interface CartSummaryProps {
  totalPrice: number;
}

export default function CartSummaryProducts({ totalPrice }: CartSummaryProps) {
  const text = useMenuByLangName()
  const {summary} = text.text.cartInfo[0]
  return (
    <div className="flex justify-between items-center mt-6 pt-4">
      <p className={`${interBold2.className} text-xl`}>{summary}: {totalPrice} zł</p>
      <NextButton />
    </div>
  );
}