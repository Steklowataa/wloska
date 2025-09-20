"use client"
import { Inter } from "next/font/google";
import { useSearchParams } from "next/navigation";
import { useMenuByLangName } from "@/utils/useMenuByLangName";

const inter = Inter({ subsets: ["latin"], weight: "600" });
const inter2 = Inter({ subsets: ["latin"], weight: "400" });

const SummaryHeader = () => {
    const searchParams = useSearchParams();
    const orderNumber = searchParams.get("orderNumber") || "N/A";
    const text = useMenuByLangName()
    const {thankingMsg, deliveryMsg, deliveryNumb} = text.formVal.formDetails[0]
    return (
        <>
        <p className={`${inter.className} text-2xl text-center text-white`}>
            {thankingMsg}
        </p>
        <p className={`${inter.className} text-lg mt-1 text-center text-white`}>
            {deliveryMsg}
        </p>
        <p  className={`${inter2.className} text-[16px] mt-3 text-center text-gray-300`}>
            {deliveryNumb}{" "}
        <strong className="text-white">{orderNumber}</strong>
      </p>
    </>
  );
}

export default SummaryHeader
