"use client";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import Input from "./Input";
import { Inter } from "next/font/google";
import { type OrderInputValues } from "@/utils/zodSchema";
import { useMenuByLangName } from "@/utils/useMenuByLangName";

const inter = Inter({ subsets: ["latin"], weight: "600" });

export default function AdressDataForm() {
  const form = useFormContext<OrderInputValues>();
  const text = useMenuByLangName()
  const { adresTitle, streetN, streetNum, flatNum, floorNum, stairCase} = text.formVal.adresForm[0]
  const fields = [
    { name: "streetName", label: streetN, placeholder: "3go Maja" },
    { name: "streetNumber", label: streetNum, placeholder: "11" },
    { name: "flatNumber", label: flatNum, placeholder: "11" },
    { name: "floorNumber", label: floorNum, placeholder: "1" },
    { name: "staircase", label: stairCase, placeholder: "2" },
  ];

  return (
    <div className="pl-3 pr-7 rounded-[20px] w-[800px] h-[380px] bg-[#28091D]/40 border border-white p-6">
      <h2
        className={`${inter.className} text-4xl font-extrabold text-center mb-8`}
        style={{ WebkitTextStroke: "2px white", color: "transparent" }}
      >
        {adresTitle}
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as keyof OrderInputValues}
            render={({ field: controllerField }) => (
              <FormItem className={`${inter.className}`}>
                <FormLabel className={`${inter.className} text-[16px]`}>{field.label}</FormLabel>
                <FormControl>
                  <Input {...controllerField} placeholder={field.placeholder} className="placeholder:text-sm placeholder:text-gray-400" />
                </FormControl>
                <FormMessage className="text-red-500 text-[14px] min-h-[18px]" />
              </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  );
}
