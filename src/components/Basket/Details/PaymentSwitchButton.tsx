"use client";
import { Inter } from "next/font/google";
import { UseFormReturn, Controller } from "react-hook-form";
import { PaymentValues } from "@/utils/zodSchema";
import Changes from "./Changes";

const inter = Inter({ subsets: ["latin"], weight: "600" });

type Props = {
  form: UseFormReturn<PaymentValues>;
};

export default function PaymentSwitchButton({ form }: Props) {
  const { control, watch } = form;
  const choice = watch("payment");

  return (
    <>
      <div className="grid grid-cols-2 gap-2 mt-4 w-[400px] pl-6">
        <Controller
          control={control}
          name="payment"
          render={({ field }) => (
            <>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="Gotówka"
                  checked={field.value === "Gotówka"}
                  onChange={() => field.onChange("Gotówka")}
                  className="appearance-none w-5 h-5 rounded-full border-2 border-gray-400 
                             checked:border-green-500 checked:bg-green-500 cursor-pointer"/>
                <span className={`${field.value === "Gotówka" ? "font-semibold" : "text-gray-400"}`}>
                  Gotówka
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="Karta"
                  checked={field.value === "Karta"}
                  onChange={() => field.onChange("Karta")}
                  className="appearance-none w-5 h-5 rounded-full border-2 border-gray-400 
                             checked:border-green-500 checked:bg-green-500 cursor-pointer"/>
                <span className={`${
                    field.value === "Karta"
                      ? `font-semibold ${inter.className}`
                      : "text-gray-400" }`}>
                  Karta
                </span>
              </label>
            </>
          )}
        />
      </div>

      <div className="mt-4">
        {choice === "Gotówka" && <Changes form={form} />}
        {choice === "Karta" && (
          <h2 className={`${inter.className} pl-6 mt-6`}>
            Płatność kartą odbywa się wyłącznie przy odbiorze u kuriera (terminal).
          </h2>
        )}
      </div>
    </>
  );
}
