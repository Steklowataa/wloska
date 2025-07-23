"use client";
import Image from "next/image";
import { useState } from "react";
import ButtonWithQuantity from "./ModalWindow/ButtonWithQuantity";
import { useRouter } from "next/navigation";

type CartItem = {
  name: string;
  image: string;
  price: number;
  quantity: number;
  totalPrice: number;
  additions?: string[];
  setQuantity: (val: number) => void;
};

export default function SummeryCart({ items }: { items: CartItem[] }) {
    // console.log("cart in preview, ", items)
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const totalPrice = (items || []).reduce((sum, item) => sum + item.totalPrice, 0);

  const handleToggleExpand = () => setExpanded(!expanded);
  const handleGoToBasket = () => router.push("/basket");

  const displayedItems =
    expanded
      ? items || []
      : items?.[0]
        ? [items[0]]
        : [];

  return (
    <div className="absolute right-4 top-[70px] z-999 bg-[#1c1c1c] text-white rounded-xl p-4 w-[90vw] sm:w-[380px] shadow-xl border border-[#7A0950]">
      <div className="flex flex-col gap-4">
        {displayedItems.length > 0 ? (
          <>
            {displayedItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4 border-b border-gray-600 pb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-xl"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-bold">
                      {item.name}
                      {item.quantity > 1 && ` ×${item.quantity}`}
                    </p>
                    <p className="font-semibold">{item.totalPrice}zł</p>
                  </div>
                  {item.additions?.length > 0 && (
                    <p className="text-xs text-gray-300">
                      {item.additions.join(", ")}
                    </p>
                  )}
                  <div className="mt-2">
                    <ButtonWithQuantity
                      price={item.price}
                      quantity={item.quantity}
                      setQuantity={(val) => item.setQuantity(val)}
                    />
                  </div>
                </div>
              </div>
            ))}
            {items.length > 1 && (
              <button
                className="text-sm text-pink-400 mt-2 hover:underline"
                onClick={handleToggleExpand}
              >
                {expanded ? "Zwiń" : `Pokaż wszystkie (${items.length})`}
              </button>
            )}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-bold">Razem:</p>
              <p className="text-lg font-bold">{totalPrice}zł</p>
            </div>
            <button
              className="bg-[#7A0950] text-white rounded-full py-2 mt-2 font-semibold hover:opacity-90"
              onClick={handleGoToBasket}
            >
              Potwierdź
            </button>
          </>
        ) : (
          <p className="text-center text-gray-400">Twój koszyk jest pusty</p>
        )}
      </div>
    </div>
  );
}
