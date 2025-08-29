"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { adresSchema } from "@/utils/zosSchema";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import Input from "./Input";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "600",
});

type FormValues = z.infer<typeof adresSchema>;
type AdresInput = z.input<typeof adresSchema>
type AdresValues = z.output<typeof adresSchema>


export default function AdressDataForm() {
  const form = useForm<AdresInput>({
    resolver: zodResolver(adresSchema),
    defaultValues: {
      streetName: "",
      streetNumber: "",
      flatNumber: "",
      floorNumber: "",
      staircase: "",
    },
  });

  function onSubmit(values: AdresValues) {
    console.log("Adres values:", values);
  }

  const fields = [
    { name: "streetName", label: "Nazwa ulicy", placeholder: "3go Maja" },
    { name: "streetNumber", label: "Numer ulicy", placeholder: "11" },
    { name: "flatNumber", label: "Numer mieszkania", placeholder: "11" },
    { name: "floorNumber", label: "Piętro (opcjonalnie)", placeholder: "1" },
    { name: "staircase", label: "Klatka (opcjonalnie)", placeholder: "2" },
  ];

  return (
    <div className="pl-3 pr-7 rounded-[20px] w-[800px] h-[380px] bg-[#28091D]/40 border border-white p-6">
      <h2
        className={`${inter.className} text-4xl font-extrabold text-center mb-8`}
        style={{
          WebkitTextStroke: "2px white",
          color: "transparent",
        }}
      >
        Adres
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-6">
            {fields.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name as keyof FormValues}
                render={({ field: controllerField }) => (
                  <FormItem className={`${inter.className}`}>
                    <FormLabel className={`${inter.className} text-[16px]`}>{field.label}</FormLabel>
                    <FormControl>
                      <Input
                        {...controllerField}
                        placeholder={field.placeholder}
                        className="placeholder:text-sm placeholder:text-gray-400"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-[14px] min-h-[18px]" />
                  </FormItem>
                )}
              />
            ))}
          </div>
        </form>
      </Form>
    </div>
  );
}
