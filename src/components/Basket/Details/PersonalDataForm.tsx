"use client";
import { useFormContext, Controller } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import Input from "./Input";
import { Inter } from "next/font/google";
import { OrderValues } from "@/utils/zodSchema";
import { useMenuByLangName } from "@/utils/useMenuByLangName";

const inter = Inter({ subsets: ["latin"], weight: "600" });

export default function PersonalDataForm() {
  const form = useFormContext<OrderValues>();
  const text = useMenuByLangName()
  const { clientTitle, phoneNum, emailData, nameAndSurname,} = text.formVal.custInfo[0]

  const fields = [
    { name: "name", label: nameAndSurname, placeholder: nameAndSurname},
    { name: "phone", label: phoneNum, placeholder: phoneNum },
    { name: "email", label: emailData, placeholder: emailData},
  ];

  return (
    <div className="grid grid-cols-1 bg-[#28091D]/40 border border-white w-[336px] h-[465px] rounded-[20px] items-center justify-center p-6 gap-4">
      <h2
        className={`${inter.className} text-[30px] text-center mb-4`}
        style={{
          WebkitTextStroke: "2px white",
          color: "transparent",
        }}
      >
       {clientTitle}
      </h2>

      {fields.map((field) => (
        <FormField
          key={field.name}
          control={form.control}
          name={field.name as keyof OrderValues}
          render={({ field: controllerField }) => (
            <FormItem className={`${inter.className}`}>
              <FormLabel className={`${inter.className} text-[16px]`}>
                {field.label}
              </FormLabel>
              <FormControl>
                <Input {...controllerField} placeholder={field.placeholder} />
              </FormControl>
              <FormMessage className="text-red-500 text-[14px]" />
            </FormItem>
          )}
        />
      ))}
    </div>
  );
}
