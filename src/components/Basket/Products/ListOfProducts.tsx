"use client";
import { Inter } from "next/font/google";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import NextButton from "../NextButton";
import BackgroundBlobsCart from "../BackgroundBlobsCart"
import DeleteItem from "./DeleteItem";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const interBold = Inter({ subsets: ["latin"], weight: "600" });
const interBold2 = Inter({ subsets: ["latin"], weight: "800" });

export default function ListOfProducts() {  
  const { items, removeFromCart } = useCart();

  if (items.length === 0) {
    return (
      <>
      <BackgroundBlobsCart />
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#28091D]/40 rounded-xl shadow-lg z-999">
        <div className="flex items-center justify-center flex-col">
          <h1 className={`${interBold2.className} text-2xl mb-3`}>Twoje zamówienie</h1>
          <p className={`${inter.className} text-gray-300 text-center`}>Twój koszyk jest pusty</p>
        </div>
      </div>
      </>
      
    );
  }

  const totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);

  const getAdditionalsText = (item: any) => {
    const additions = [];

    if (item.sauces && item.sauces.length > 0) {
      const sauceNames = item.sauces.map((sauce: any) =>
        typeof sauce === "string" ? sauce : sauce?.name || "Unknown sauce"
      );
      additions.push(...sauceNames);
    }

    if (item.extras && item.extras.length > 0) {
      const extraNames = item.extras.map((extra: any) =>
        typeof extra === "string" ? extra : extra?.name || "Unknown extra"
      );
      additions.push(...extraNames);
    }

    return additions.join(", ");
  };

  return (
    <>
    <BackgroundBlobsCart />
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#28091D]/40 rounded-xl shadow-lg">
      <div className="flex items-center justify-center">
        <h1 className={`${interBold2.className} text-2xl mb-6`}>Twoje zamówienie</h1>
      </div>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => {
          const additionalsText = getAdditionalsText(item);

          return (
            <div key={index} className="pb-6 pr-6 last:border-b-0">
              <div className="flex gap-4 items-start">
                <Image
                  src={item.img}
                  alt={item.name}
                  style={{ objectFit: "cover" }}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
                <div className="flex-1 flex flex-col justify-between mt-[30px]">
                  <div className="flex justify-between items-start">
                    <p className={`${interBold2.className} text-[20px]`}>
                      {item.name}
                      {item.quantity > 1 && ` ×${item.quantity}`}
                    </p>
                    <span className={`${interBold2.className} text-[16px]`}>
                      {item.totalPrice} zł
                    </span>
                    <DeleteItem onDelete={() => removeFromCart(item.id)}/>
                  </div>
                  {additionalsText && (
                    <p className={`${inter.className} text-sm text-white mt-1`}>
                      <strong>Dodatki:</strong> {additionalsText}
                    </p>
                  )}
                </div>
              </div>
              <div className="border-b-4 border-[#960B63] w-3/4 mx-auto mt-6"></div>
            </div>
          );
        })}

        <div className="flex justify-between items-center mt-6 pt-4 ">
          <p className={`${interBold2.className} text-xl`}>Razem: {totalPrice} zł</p>
          <NextButton />
        </div>
      </div>
    </div>
    </>
  
  );
}