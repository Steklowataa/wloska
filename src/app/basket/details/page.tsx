"use client";
import StepButtons from "@/components/Basket/StepButtons";
import OrderDetails from "@/components/Basket/Details/OrderDetails";
import Header from "@/components/Header/Header";


export default function Page() {
  console.log("Page component rendering");
  
  return (
    <>
      <Header />
      <StepButtons />
      <OrderDetails />
    </>
  );
}