"use client";
import { Inter } from "next/font/google";
import { useCart } from "@/app/context/CartContext";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const interBold = Inter({ subsets: ["latin"], weight: "600" });
const interBold2 = Inter({ subsets: ["latin"], weight: "800" });

export default function ListOfProducts({ currentStep }: { currentStep: number }) {
  const { items, removeFromCart } = useCart();

  // Only show this component on step 1
  if (currentStep !== 1) return null;

  // Handle empty cart - check if items exists and has length
  if (!items || items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white/70 rounded-xl shadow-lg">
        <h1 className={`${interBold2.className} text-2xl mb-6`}>Twoje zamówienie</h1>
        <p className="text-gray-600 text-center py-10">Twój koszyk jest pusty</p>
      </div>
    );
  }

  // Calculate total price
  const totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);

  const handleDeleteItem = (item: any) => {
    removeFromCart(item.name, item.sauces || [], item.extras || []);
  };

  // Function to get additionals display text
  const getAdditionalsText = (item: any) => {
    const additions = [];
    
    if (item.sauces && item.sauces.length > 0) {
      const sauceNames = item.sauces.map((sauce: any) => 
        typeof sauce === 'string' ? sauce : sauce?.name || 'Unknown sauce'
      );
      additions.push(...sauceNames);
    }
    
    if (item.extras && item.extras.length > 0) {
      const extraNames = item.extras.map((extra: any) => 
        typeof extra === 'string' ? extra : extra?.name || 'Unknown extra'
      );
      additions.push(...extraNames);
    }
    
    return additions.join(", ");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white/70 rounded-xl shadow-lg">
      <h1 className={`${interBold2.className} text-2xl mb-6`}>Twoje zamówienie</h1>
      
      <div className="flex flex-col gap-4">
        {items.map((item, index) => {
          const additionalsText = getAdditionalsText(item);
          
          return (
            <div key={index} className="border-b border-gray-300 pb-3 last:border-b-0">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className={`${interBold2.className} text-lg`}>
                    {item.name}
                    {item.quantity > 1 && ` ×${item.quantity}`}
                  </p>
                  
                  {/* Show additionals if they exist */}
                  {additionalsText && (
                    <p className={`${inter.className} text-sm text-gray-700 mt-1`}>
                      {additionalsText}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 ml-4">
                  <span className={`${interBold.className} text-lg`}>
                    {item.totalPrice} zł
                  </span>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="text-red-500 hover:text-red-700 transition-colors p-1 hover:bg-red-50 rounded"
                    title="Usuń z zamówienia"
                    type="button"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Total and action button */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-300">
          <p className={`${interBold2.className} text-xl`}>
            Razem: {totalPrice} zł
          </p>
          <button
            className={`${interBold.className} bg-[#7A0950] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity`}
            type="button"
          >
            Dalej →
          </button>
        </div>
      </div>
    </div>
  );
}