"use client";
import SwitchButton from "./SwitchButton";
import PersonalDataForm from "./PersonalDataForm";
import AdressDataForm from "./AdressDataForm";
import ExtraDataForm from "./ExtraDataForm";
import PaymentForm from "./PaymentForm";
import NextButton from "../NextButton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderSchema, OrderValues } from "@/utils/zodSchema";
import { Form } from "@/components/ui/form";

export default function OrderDetails() {
  const [isDelivery, setIsDelivery] = useState<boolean>(false);

  const form = useForm<OrderValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      streetName: "",
      streetNumber: undefined,
      flatNumber: undefined,
      floorNumber: undefined,
      staircase: undefined,
      promoCode: "",
      message: "",
      payment: "Gotówka",
      change: "50",
    },
    mode: "onChange",
  });

  return (
    <Form {...form}>
      <form className="flex justify-center items-start min-h-screen">
        <div className="flex flex-col gap-10">
          {/* Switch */}
          <div className="flex justify-center mt-4">
            <SwitchButton isDelivery={isDelivery} setIsDelivery={setIsDelivery} />
          </div>

          {!isDelivery ? (
            <>
              <div className="flex gap-8 justify-center">
                <PersonalDataForm form={form} />
                <AdressDataForm form={form} />
              </div>
              <div className="flex gap-8 justify-center -mt-15">
                <ExtraDataForm form={form} />
                <PaymentForm form={form} />
              </div>
              <div className="flex justify-end mt-[-270px] z-999">
                <NextButton form={form} />
              </div>
            </>
          ) : (
            <div className="flex justify-center">
              <h2 className="text-xl font-semibold">TO DO</h2>
            </div>
          )}
        </div>
      </form>
    </Form>
  );
}
