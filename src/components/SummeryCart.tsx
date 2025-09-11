"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import groupCartItems from "@/utils/GroupCartItem";
import { useCart } from "@/app/context/CartContext";
import { Inter } from "next/font/google";
import { AiOutlineDelete } from "react-icons/ai";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  totalPrice: number;
  sauces?: any[];
  extras?: any[];
};

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

const interBold = Inter({
  subsets: ["latin"],
  weight: "600",
});

const interBold2 = Inter({
  subsets: ["latin"],
  weight: "800",
});

export default function SummeryCart({ items }: { items: CartItem[] }) {
  const router = useRouter();
  const { removeFromCart } = useCart();
  const [expanded, setExpanded] = useState(false);

  const totalPrice = (items || []).reduce((sum, item) => sum + item.totalPrice, 0);
  const handleGoToBasket = () => router.push("/basket/products");

  const groupedItems = groupCartItems(items);

  const displayedItems = expanded ? groupedItems : groupedItems.slice(0, 2);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleDeleteItem = (item: CartItem) => {
    removeFromCart(item.id); 
  };

  return (
    <div className="absolute right-0 top-12 z-999 bg-white backdrop-blur-2xl text-black rounded-xl p-4 w-[85vw] sm:w-[320px] shadow-xl">
      <div className="flex flex-col gap-3">
        {displayedItems.length > 0 ? (
          <>
            {displayedItems.map((item, i) => (
              <div key={item.id} className="border-b border-gray-200 pb-3 last:border-b-0">
                {/* nazwa, dodatki, przycisk usun*/}
                <div className="flex justify-between items-center mb-1">
                  <div className="flex-1">
                    <span className={`${interBold2.className} text-[17px]`}>
                      {item.name}
                      {item.quantity > 1 && ` ×${item.quantity}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`${interBold2.className} text-[15px]`}>{item.totalPrice}zł</span>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="text-red-500 hover:text-[#EE0498] text-lg transition-colors cursor-pointer p-1 hover:bg-red-50 rounded"
                      title="Usuń z koszyka"
                      type="button"
                    >
                      <AiOutlineDelete width={20}/>
                    </button>
                  </div>
                </div>

                {/* dodatki */}
                {(item.sauces?.length || item.extras?.length) ? (
                  <div className={`${inter.className} text-[12px]`}>
                    {[...(item.sauces || []), ...(item.extras || [])]
                      .map((extra) => (typeof extra === "string" ? extra : extra?.name || "Unknown"))
                      .join(", ")}
                  </div>
                ) : null}
              </div>
            ))}

            {groupedItems.length > 2 && (
              <button
                className={`${inter.className} text-sm text-[#FF01A2] mt-2 hover:underline cursor-pointer`}
                onClick={handleToggleExpand}
                type="button"
              >
                {expanded ? "Pokaż mniej" : `Pokaż wszystkie (${groupedItems.length})`}
              </button>
            )}

            {/* footer */}
            <div className="flex justify-between items-center mt-1 pt-2">
              <p className={`${interBold2.className} text-[17px]`}>Razem: {totalPrice}zł</p>
              <button
                className={`${interBold.className} text-[15px] bg-[#7A0950] text-white rounded-full 
                px-4 py-2 font-semibold hover:opacity-90 
                cursor-pointer transition-opacity`}
                onClick={handleGoToBasket}
                type="button"
              >
                Potwierdź
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-black py-4">Twój koszyk jest pusty</p>
        )}
      </div>
    </div>
  );
}
