import { Inter } from "next/font/google";
import BackgroundBlobsCart from "../BackgroundBlobsCart";
import { useMenuByLangName } from "@/utils/useMenuByLangName";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const interBold2 = Inter({ subsets: ["latin"], weight: "800" });

export default function EmptyCart() {
  const formValue = useMenuByLangName()
  const {order, cartMessage} = formValue.formVal.yourOrder[0]
  return (
    <>
      <BackgroundBlobsCart />
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#28091D]/40 rounded-xl shadow-lg z-999">
        <div className="flex items-center justify-center flex-col">
          <h1 className={`${interBold2.className} text-2xl mb-3`}>{order}</h1>
          <p className={`${inter.className} text-gray-300 text-center`}>{cartMessage}</p>
        </div>
      </div>
    </>
  );
}