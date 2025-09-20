"use client";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import Input from "./Input";
import { Inter } from "next/font/google";
import Image from "next/image";
import { OrderValues } from "@/utils/zodSchema";
import { useMenuByLangName } from "@/utils/useMenuByLangName";

const inter = Inter({ subsets: ["latin"], weight: "600" });

export default function ExtraDataForm() {
  const form = useFormContext<OrderValues>();
  const text = useMenuByLangName()
  const {messageClient} = text.formVal.formDetails[0]
  const fields = [
    { name: "promoCode", label: "PROMOKOD", placeholder: "np. YXC34RX" },
    { name: "message", label: messageClient, placeholder: "Proszę nie używać dzwonka" },
  ];

  return (
    <div className="relative w-[550px] h-[400px]">
      <Image
        alt="background"
        src="/images/rectangle.png"
        width={600}
        height={400}
        className="absolute mt-0"
      />

      <div className="absolute inset-0 pl-4 pr-6 pt-10">
        <div className="grid grid-cols-2 gap-x-3 gap-y-4">
          {fields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name as keyof OrderValues}
              render={({ field: controllerField }) => (
                <FormItem className={`${inter.className}`}>
                  <FormLabel className={`${inter.className} text-white mt-6 text-[16px]`}>
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
      </div>
    </div>
  );
}
