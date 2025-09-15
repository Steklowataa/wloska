"use client";

import StepButtons from "@/components/Basket/StepButtons";
import OrderDetails from "@/components/Basket/Details/OrderDetails";
import Header from "@/components/Header/Header";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderSchema, OrderValues } from "@/utils/zodSchema";

export default function Page() {
  const router = useRouter();
  const form = useForm<OrderValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      streetName: "",
      streetNumber: "",
      flatNumber: "",
      floorNumber: "",
      staircase: "",
      promoCode: "",
      message: "",
      payment: "Gotówka",
      change: "50",
    },
    mode: "onChange",
  });


  const goToSummary = async () => {
    const isValid = await form.trigger();
    if (!isValid) return; 
    router.push("/basket/summary");
  };

  return (
    <>
      <Header showCart={false}/>
      <StepButtons goToSummary={goToSummary} />
      <OrderDetails form={form} />
    </>
  );
}
