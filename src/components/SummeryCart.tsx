"use client";
import Image from "next/image";
import { useState } from "react";
import ButtonWithQuantity from "./ModalWindow/ButtonWithQuantity";
import { useRouter } from "next/navigation";
import { Divide } from "lucide-react";
import groupCartItems from "@/utils/GroupCartItem";
import { useCart } from "@/app/context/CartContext";

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

export default function SummeryCart({ items }: { items: CartItem[] }) {
  // const [expanded, setExpanded] = useState(false); // ← niepotrzebne po modyfikacji
  const router = useRouter();
  const { removeFromCart } = useCart();

  const totalPrice = (items || []).reduce((sum, item) => sum + item.totalPrice, 0);
  // const handleToggleExpand = () => setExpanded(!expanded); // ← niepotrzebne po modyfikacji
  const handleGoToBasket = () => router.push("/basket");

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

  // ↓ zawsze pokazujemy całą listę pozycji
  const displayedItems = groupedItems;

  const handleDeleteItem = (item: any) => {
    // Remove all instances of this specific item (with same name, sauces, and extras)
    const itemsToRemove = items.filter(cartItem => {
      const sameBaseName = cartItem.name === item.name;
      const sameSauces = JSON.stringify(cartItem.sauces || []) === JSON.stringify(item.sauces || []);
      const sameExtras = JSON.stringify(cartItem.extras || []) === JSON.stringify(item.extras || []);
      return sameBaseName && sameSauces && sameExtras;
    });

    // Remove each instance
    itemsToRemove.forEach(() => {
        removeFromCart(item.name, item.sauces || [], item.extras || []);
    });
  };

  return (
    <div className="absolute left-10 top-10 z-999 bg-white backdrop-blur-2xl text-black rounded-xl p-4 w-[90vw] sm:w-[380px] shadow-xl]">
      <div className="flex flex-col gap-4">
        {displayedItems.length > 0 ? (
          <>
            {displayedItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4 border-b border-grey pb-4">
                {item.image ? (
                  <Image
                    src={item.image || "4-sery.png"}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-xl"
                  />
                ) : (
                  <div className="rounded-full w-[60px] h-[60px] z-50 bg-grey"></div>
                )}
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-bold">
                      {item.name}
                      {item.quantity > 1 && ` ×${item.quantity}`}
                    </p>
                    <div className="flex flex-col items-end">
                      <p className="font-semibold">{item.totalPrice}zł</p>
                      <button 
                        onClick={() => handleDeleteItem(item)}
                        className="text-red-500 hover:text-red-700 text-sm mt-1 transition-colors"
                        title="Usuń z koszyka"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  {/* Fixed: Better handling of sauces and extras display */}
                  {/* Debug the condition */}
                  {(() => {
                    const hasSauces = item.sauces && item.sauces.length > 0;
                    const hasExtras = item.extras && item.extras.length > 0;
                    console.log(`Item ${item.name} - hasSauces:`, hasSauces, 'hasExtras:', hasExtras);
                    console.log(`Item ${item.name} - sauces:`, item.sauces, 'extras:', item.extras);
                    return (hasSauces || hasExtras);
                  })() && (
                    <p className="text-xs text-gray-300">
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
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* 
            // ← zakomentowane, bo nie potrzebujemy już rozwoju listy
            {items.length > 2 && (
              <button
                className="text-sm text-pink-400 mt-2 hover:underline"
                onClick={handleToggleExpand}
              >
                {expanded ? "Zwiń" : `Pokaż wszystkie (${items.length})`}
              </button>
            )} 
            */}

            <div className="flex gap-x-30 items-center mt-4">
              <p className="text-lg font-bold">Razem: {totalPrice}zł</p>
              <button
                className="bg-[#7A0950] text-white rounded-full py-2 mt-2 font-semibold hover:opacity-90 w-[120px]"
                onClick={handleGoToBasket}
              >
                Potwierdź
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-white">Twój koszyk jest pusty</p>
        )}
      </div>
    </div>
  );
}