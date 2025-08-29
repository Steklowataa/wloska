"use client";

import { Inter } from "next/font/google";

const inter2 = Inter({ subsets: ["latin"], weight: "400" });

export default function CustomerInfo({ customer }: any) {
  if (!customer) return null;

  return (
    <div className="w-full max-w-[500px] mt-4 text-gray-300 space-y-1">
      {customer.message && (
        <p className={`${inter2.className} text-sm`}>
          Komentarz: {customer.message}
        </p>
      )}
      {customer.payment && (
        <p className={`${inter2.className} text-sm`}>
          Płatność: {customer.payment}, Reszta z {customer.change}zł
        </p>
      )}
    </div>
  );
}
