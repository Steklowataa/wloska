"use client";
import StepButtons from "@/components/Basket/StepButtons";
import OrderDetails from "@/components/Basket/Details/OrderDetails";

export default function Page() {
  console.log("Page component rendering");
  
  return (
    <>
      <StepButtons />
      <OrderDetails />
    </>
  );
}