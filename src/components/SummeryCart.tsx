"use client";
import Image from "next/image";
import { useState } from "react";
import ButtonWithQuantity from "./ModalWindow/ButtonWithQuantity";
import { useRouter } from "next/navigation";
import { Divide } from "lucide-react";
import groupCartItems from "@/utils/GroupCartItem";
import { useCart } from "@/app/context/CartContext";
import { Inter } from "next/font/google";

type CartItem = {
  name: string;
  image: string;
  price: number;
  quantity: number;
  totalPrice: number;
  sauces?: any[];
  extras?: any[];
  setQuantity: (val: number) => void;
};

const inter = Inter({
    subsets: ["latin"],
    weight: "400"
  })
  
const interBold = Inter({
    subsets: ["latin"],
    weight: "600"
})

const interBold2 = Inter({
    subsets: ["latin"],
    weight: "800"
})

export default function SummeryCart({ items }: { items: CartItem[] }) {
  const router = useRouter();
  const { removeFromCart } = useCart();
  const [expanded, setExpanded] = useState(false);

  const totalPrice = (items || []).reduce((sum, item) => sum + item.totalPrice, 0);
  const handleGoToBasket = () => router.push("/basket/products");

  const groupedItems = groupCartItems(items);

  // Debug: Let's see what we're working with
  console.log("Original items:", items);
  console.log("Grouped items:", groupedItems);
  
  // More detailed debugging for each item
  items.forEach((item, index) => {
    console.log(`Item ${index}:`, {
      name: item.name,
      sauces: item.sauces,
      extras: item.extras,
      saucesType: typeof item.sauces,
      extrasType: typeof item.extras,
      saucesLength: item.sauces?.length,
      extrasLength: item.extras?.length
    });
  });

  // Show only first 2 items unless expanded
  const displayedItems = expanded ? groupedItems : groupedItems.slice(0, 2);
  
  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleDeleteItem = (item: any) => {
    const itemsToRemove = items.filter(cartItem => {
      const sameBaseName = cartItem.name === item.name;
      const sameSauces = JSON.stringify(cartItem.sauces || []) === JSON.stringify(item.sauces || []);
      const sameExtras = JSON.stringify(cartItem.extras || []) === JSON.stringify(item.extras || []);
      return sameBaseName && sameSauces && sameExtras;
    });

    itemsToRemove.forEach(() => {
        removeFromCart(item.name, item.sauces || [], item.extras || []);
    });
  };

  return (
    <div className="absolute left-10 top-10 z-999 bg-white backdrop-blur-2xl text-black rounded-xl p-4 w-[85vw] sm:w-[320px] shadow-xl">
      <div className="flex flex-col gap-3">
        {displayedItems.length > 0 ? (
          <>
            {displayedItems.map((item, i) => (
              <div key={i} className="border-b border-gray-200 pb-3 last:border-b-0">
                {/* First line: Pizza name, quantity, price and trash button */}
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
                      🗑️
                    </button>
                  </div>
                </div>
                
                {/* Second line: Additions (sauces and extras) */}
                {(() => {
                  const hasSauces = item.sauces && item.sauces.length > 0;
                  const hasExtras = item.extras && item.extras.length > 0;
                  console.log(`Item ${item.name} - hasSauces:`, hasSauces, 'hasExtras:', hasExtras);
                  console.log(`Item ${item.name} - sauces:`, item.sauces, 'extras:', item.extras);
                  return (hasSauces || hasExtras);
                })() && (
                  <div className={`${inter.className} text-[12px]`}>
                    {/* Safely extract names from sauces and extras */}
                    {(() => {
                      const sauceNames = (item.sauces || []).map((sauce) => {
                        console.log('Processing sauce:', sauce, 'type:', typeof sauce);
                        return typeof sauce === 'string' ? sauce : sauce?.name || 'Unknown sauce';
                      });
                      const extraNames = (item.extras || []).map((extra) => {
                        console.log('Processing extra:', extra, 'type:', typeof extra);
                        return typeof extra === 'string' ? extra : extra?.name || 'Unknown extra';
                      });
                      const allNames = [...sauceNames, ...extraNames];
                      console.log('Final names array:', allNames);
                      return allNames.join(", ");
                    })()}
                  </div>
                )}
              </div>
            ))}

            {/* Show expand/collapse button only when there are more than 2 items */}
            {groupedItems.length > 2 && (
              <button
                className={`${inter.className} text-sm text-[#FF01A2] mt-2 hover:underline cursor-pointer`}
                onClick={handleToggleExpand}
                type="button"
              >
                {expanded ? "" : `Pokaż wszystkie (${groupedItems.length})`}
              </button>
            )}

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