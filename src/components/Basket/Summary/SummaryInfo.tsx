"use client";
import { useCart } from "@/app/context/CartContext";
import { useSearchParams } from "next/navigation";
import NextButton from "../NextButton";
import SummaryHeader from "./SummaryHeader";
import ProductList from "./ProductList";
import SocialMediaInfo from "./SocialMediaInfo";
import BackgroundBlobsCart from "../BackgroundBlobsCart";

export default function SummaryInfo() {
  const { items } = useCart();
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber") || "N/A";

  const totalPrice = items.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);

  return (
    <>
      <BackgroundBlobsCart />
      <div className="flex flex-col items-center justify-center gap-6 mt-10">
        <div className="flex flex-col text-white border border-white rounded-[20px] bg-[#28091D]/60 p-8 w-[600px] max-w-[90vw]">
          <SummaryHeader orderNumber={orderNumber} />

          <div className="mt-6 w-full flex flex-col items-center">
            <ProductList items={items} totalPrice={totalPrice} />
          </div>

          <div className="flex items-center justify-center mt-10">
            <NextButton />
          </div>

          <SocialMediaInfo />
        </div>
      </div>
    </>
   
  );
}
