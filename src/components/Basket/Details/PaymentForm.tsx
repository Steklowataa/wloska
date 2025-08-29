"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema, type PaymentValues,} from "@/utils/zodSchema";
import { Form } from "@/components/ui/form";
import PaymentSwitchButton from "./PaymentSwitchButton";

export default function PaymentForm() {
  const form = useForm<PaymentValues>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      payment: "Gotówka",
      change: "50",
    },
  });

  const onSubmit = (values: PaymentValues) => {
    console.log("Payment submitted:", values);
  };

  return (
    <div className="relative w-[595px] h-[228px] items-center">
      <Image
        src="/images/Rectangle132.svg"
        alt="background"
        fill
        className="absolute inset-0 z-0 object-cover rounded-2xl"
      />

      <div className="relative z-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <PaymentSwitchButton form={form} />
            <button
              type="submit"
              className="ml-6 mt-6 px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Zapisz płatność
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
}