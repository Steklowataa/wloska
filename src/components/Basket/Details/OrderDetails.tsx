"use client";
import SwitchButton from "./SwitchButton";
import PersonalDataForm from "./PersonalDataForm";
import AdressDataForm from "./AdressDataForm";
import ExtraDataForm from "./ExtraDataForm";
import PaymentForm from "./PaymentForm";
import NextButton from "../NextButton";
import { Form } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { type OrderInputValues } from "@/utils/zodSchema";
import { useState } from "react";
import BackgroundBlobsCart from "../BackgroundBlobsCart";


type Props = {
  form: UseFormReturn<OrderInputValues>;
};

export default function OrderDetails({ form }: Props) {
  const [isDelivery, setIsDelivery] = useState<boolean>(false);

  return (
    <>
    <BackgroundBlobsCart />
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
                <PersonalDataForm />
                <AdressDataForm />
              </div>
              <div className="flex gap-8 justify-center -mt-15">
                <ExtraDataForm />
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
    </>
  );
}
