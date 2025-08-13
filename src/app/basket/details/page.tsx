"use client";
import StepButtons from "@/components/Basket/StepButtons";
import ListOfProducts from "@/components/Basket/Products/ListOfProducts";
import { useCart } from "@/app/context/CartContext";

// Debug component
function DebugCart() {
  const { items, totalQuantity } = useCart();
  console.log("Debug - Items:", items);
  console.log("Debug - Total quantity:", totalQuantity);
  
  return (
    <div className="bg-red-500 text-white p-4 mb-4">
      Debug: Cart has {items.length} items, total quantity: {totalQuantity}
    </div>
  );
}

export default function Page() {
  console.log("Page component rendering");
  
  return (
    <>
      <DebugCart />
      <StepButtons />
      <ListOfProducts />
    </>
  );
}