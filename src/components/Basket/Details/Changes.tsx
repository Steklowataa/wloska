"use client";
import { Inter } from "next/font/google";
import { UseFormReturn, Controller } from "react-hook-form";
import { type OrderInputValues } from "@/utils/zodSchema";
import { useMenuByLangName } from "@/utils/useMenuByLangName";

const inter = Inter({ subsets: ["latin"], weight: "600" });

type Props = {
  form: UseFormReturn<OrderInputValues>;
};

export default function Changes({ form }: Props) {
  const text = useMenuByLangName()
  const {changeForm2, anotherAmount, withoutChange,} = text.formVal.formDetails[0]
  return (
    <div className={`${inter.className} pl-6 mt-6`}>
      <p className="mb-2">{changeForm2} </p>
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
            <option value="other">{anotherAmount}</option>
            <option value="none">{withoutChange}</option>
          </select>
        )}
      />
    </div>
  );
}
