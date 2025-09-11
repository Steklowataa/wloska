"use client";
import { Inter } from "next/font/google";
import { UseFormReturn, Controller } from "react-hook-form";
import { PaymentValues } from "@/utils/zodSchema";

const inter = Inter({ subsets: ["latin"], weight: "600" });

type Props = {
  form: UseFormReturn<PaymentValues>;
};

export default function Changes({ form }: Props) {
  return (
    <div className={`${inter.className} pl-6 mt-6`}>
      <p className="mb-2">Wydaj resztę od: </p>
      <Controller
        control={form.control}
        name="change"
        render={({ field }) => (
          <select
            {...field}
            className="border border-white w-[252px] h-[48px] rounded-[10px] pl-2 pr-2 bg-transparent text-white">
            <option value="50">50 zł</option>
            <option value="100">100 zł</option>
            <option value="200">200 zł</option>
            <option value="other">Inna kwota</option>
            <option value="none">Nie potrzebuję resztę</option>
          </select>
        )}
      />
    </div>
  );
}
