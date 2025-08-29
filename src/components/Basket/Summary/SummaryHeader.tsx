"use client"
import { Inter } from "next/font/google";
import { useSearchParams } from "next/navigation";


const inter = Inter({ subsets: ["latin"], weight: "600" });
const inter2 = Inter({ subsets: ["latin"], weight: "400" });

const SummaryHeader = () => {
    const searchParams = useSearchParams();
    const orderNumber = searchParams.get("orderNumber") || "N/A";
    return (
        <>
        <p className={`${inter.className} text-2xl text-center text-white`}>
            Dziękujemy za zamówienie!
        </p>
        <p className={`${inter.className} text-lg mt-1 text-center text-white`}>
            Czas oczekiwania 40-60 minut
        </p>
        <p  className={`${inter2.className} text-[16px] mt-3 text-center text-gray-300`}>
            Numer twojego zamówienia:{" "}
        <strong className="text-white">{orderNumber}</strong>
      </p>
    </>
  );
}

export default SummaryHeader
