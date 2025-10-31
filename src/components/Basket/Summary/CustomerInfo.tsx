"use client";
import { Inter } from "next/font/google";
import { useMenuByLangName } from "@/utils/useMenuByLangName";

const inter2 = Inter({ subsets: ["latin"], weight: "400" });

type Customer = {
    message?: string;
    payment?: string;
    change?: string | number;
}

type Props = {
    customer: Customer | null
}

export default function CustomerInfo({ customer }: Props) {
  const text = useMenuByLangName()
  if (!customer) return null;
  const {message, payment, changeFrom} = text.formVal.custInfo[0]
  return (
    <div className="w-full max-w-[500px] mt-4 text-gray-300 space-y-1">
      {customer.message && (
        <p className={`${inter2.className} text-sm`}>
          {message}: {customer.message}
        </p>
      )}
      {customer.payment && (
        <p className={`${inter2.className} text-sm`}>
          {payment}: {customer.payment}, {changeFrom} {customer.change}zł
        </p>
      )}
    </div>
  );
}
