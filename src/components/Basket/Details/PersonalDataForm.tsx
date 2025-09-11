"use client";
import { useFormContext, Controller } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import Input from "./Input";
import { Inter } from "next/font/google";
import { OrderValues } from "@/utils/zodSchema";

const inter = Inter({ subsets: ["latin"], weight: "600" });

export default function PersonalDataForm() {
  const form = useFormContext<OrderValues>();

  const fields = [
    { name: "name", label: "Imię i nazwisko", placeholder: "Imię i nazwisko" },
    { name: "phone", label: "Numer telefonu", placeholder: "Numer telefonu" },
    { name: "email", label: "Email", placeholder: "Email" },
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
        Dane Osobowe
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
              <FormMessage className="text-red-600 text-sm" />
            </FormItem>
          )}
        />
      ))}
    </div>
  );
}
