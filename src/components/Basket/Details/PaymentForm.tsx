"use client";

import Image from "next/image";
import { UseFormReturn } from "react-hook-form";
import { paymentSchema, type PaymentValues } from "@/utils/zodSchema";
import { Form } from "@/components/ui/form";
import PaymentSwitchButton from "./PaymentSwitchButton";

type Props = {
  form: UseFormReturn<PaymentValues>;
  onSave?: (values: PaymentValues) => void; // opcjonalnie
};

export default function PaymentForm({ form, onSave }: Props) {
  const handleLocalSave = form.handleSubmit((values) => {
    onSave?.(values);
  });

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
          <div className="flex flex-col">
            <PaymentSwitchButton form={form} />
            
          </div>
        </Form>
      </div>
    </div>
  );
}
