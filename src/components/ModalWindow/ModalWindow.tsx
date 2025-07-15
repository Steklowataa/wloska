"use client";
import { useState } from "react";
import { useCart } from "../../app/context/CartContext";
import Image from "next/image";
import { Inter } from "next/font/google";
import ButtonWithQuantity from "./ButtonWithQuantity";
import SetWithQuantity from "./SetWithQuantity";
import ShowMore from "./ShowMore";
import { menu } from "@/utils/text";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const inter2 = Inter({ subsets: ["latin"], weight: "600" });

type Item = {
  name: string;
  price: number;
};

type ModalWindowProps = {
  name: string;
  description: string;
  type: "pizza" | "burger" | "smashburger" | "extras" | "drinks" | "sos";
  img: string;
  tag?: string;
  price: number;
  onClose: () => void;
};

export default function ModalWindow({
  name,
  description,
  type,
  img,
  price,
  onClose,
}: ModalWindowProps) {
  const { addToCart } = useCart();

  const [selectedSauces, setSelectedSauces] = useState<Item[]>([]);
  const [selectedExtras, setSelectedExtras] = useState<Item[]>([]);
  const [productQuantity, setProductQuantity] = useState<number>(1); // solo
  const [setQuantity, setSetQuantity] = useState<number>(0); // zestaw
  const [showAllSauces, setShowAllSauces] = useState(false);
  const [showAllExtras, setShowAllExtras] = useState(false);

  const isSelected = (item: Item, list: Item[]) =>
    list.some((i) => i.name === item.name);

  const toggleItem = (
    item: Item,
    list: Item[],
    setList: (items: Item[]) => void
  ) => {
    setList(
      isSelected(item, list)
        ? list.filter((i) => i.name !== item.name)
        : [...list, item]
    );
  };

  // Check if this item includes free sauce
  const includesFreeSauce = description.toLowerCase().includes("sosem do wyboru") || description.toLocaleLowerCase().includes("sos do wyboru");
  const freeSauceLimit = includesFreeSauce ? 1 : 0;

  // Calculate prices considering free sauce
  const calculateSaucesPrice = (sauces: Item[]) => {
    if (!includesFreeSauce) {
      return sauces.reduce((sum, s) => sum + s.price, 0);
    }
    
    // First sauce is free, rest are paid
    return sauces.slice(1).reduce((sum, s) => sum + s.price, 0);
  };

  const saucesPrice = calculateSaucesPrice(selectedSauces);
  const extrasPrice = selectedExtras.reduce((sum, e) => sum + e.price, 0);
  const singlePrice = price + saucesPrice + extrasPrice;
  const singleSetPrice = singlePrice + 7;

  const totalPriceNormal = singlePrice * productQuantity;
  const totalPriceZestaw = singleSetPrice * setQuantity;

  const totalCombinedQuantity = productQuantity + setQuantity;
  const totalCombinedPrice = totalPriceNormal + totalPriceZestaw;

  const handleAdd = () => {
    for (let i = 0; i < productQuantity; i++) {
      addToCart({
        name,
        description,
        type,
        basePrice: price,
        sauces: selectedSauces,
        extras: selectedExtras,
        totalPrice: singlePrice,
      });
    }

    for (let i = 0; i < setQuantity; i++) {
      addToCart({
        name: name + " Zestaw",
        description,
        type,
        basePrice: price,
        sauces: selectedSauces,
        extras: selectedExtras,
        totalPrice: singleSetPrice,
      });
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center z-50">
      <div className="bg-black rounded-[30px] text-white w-[380px] sm:w-[440px] max-h-[90vh] p-4 border border-gray-600 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-[24px] w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded-full z-10"
        >
          ×
        </button>
        <div className="overflow-y-auto max-h-[90vh] p-6 flex flex-col">
          <div className="flex items-center justify-center mb-6">
            <Image
              src={img}
              width={200}
              height={200}
              alt={name}
              className="rounded-full"
            />
          </div>
          <h2 className={`${inter2.className} text-[24px] mb-2`}>{name}</h2>
          <p className={`${inter.className} text-gray-300 mb-6 text-[14px]`}>
            {description}
          </p>

          <div className="">
            {(type === "pizza" || type === "extras" || type === "drinks" || type === "sos") && (
              <ButtonWithQuantity
                price={price}
                quantity={productQuantity}
                setQuantity={setProductQuantity}
              />
            )}

            {(type === "burger" || type === "smashburger") && (
              <>
                <ButtonWithQuantity
                  price={price}
                  quantity={productQuantity}
                  setQuantity={setProductQuantity}
                  allowZero={true}
                />
                <SetWithQuantity
                  name={name}
                  price={price}
                  quantity={setQuantity}
                  setQuantity={setSetQuantity}
                />
              </>
            )}
          </div>
          
          <div className="flex-1">
            { type === "pizza" && (
              <>
              <h3 className={`${inter2.className} text-[20px] mt-0 mb-2`}>Dodatki</h3>
                <h4 className={`${inter.className} text-[12px] text-gray-400 mb-4`}>
                  Prosimy wybrać maksymalnie 2 dodatki
                </h4>
                <div className="mb-4">
                  <ShowMore
                    items={menu.pizzaExtras}
                    showAll={showAllExtras}
                    setShowAll={setShowAllExtras}
                    checkFunction={(item) => isSelected(item, selectedExtras)}
                    toggleFunction={(item) =>
                      toggleItem(item, selectedExtras, setSelectedExtras)
                    }
                  />
                </div>
              </>
            )}
            { type === "burger" && (
              <>
              <h2 className={`${inter2.className} text-[20px] mt-3 mb-4`}>Dodatki</h2>
              <ShowMore items={menu.burgerOptions} showAll={showAllExtras} setShowAll={setShowAllExtras} checkFunction={(item) => isSelected(item, selectedExtras)}
              toggleFunction={(item) => toggleItem(item, selectedExtras, setSelectedExtras)}/>
              </>
            )} 
            { type === "smashburger" && (
              <>
              <h2 className={`${inter2.className} text-[20px] mt-3 mb-4`}>Dodatki</h2>
              <ShowMore items={menu.smashOptions} showAll={showAllExtras} setShowAll={setShowAllExtras} checkFunction={(item) => isSelected(item, selectedExtras)}
              toggleFunction={(item) => toggleItem(item, selectedExtras, setSelectedExtras)}/>
              </>
            )} 
            { (type !== "drinks" && type !== "sos" && type != "smashburger" && type != "burger") && (
              <>
                <h3 className={`${inter2.className} text-[20px] mt-6 mb-2`}>Sosy</h3>
                {/* {includesFreeSauce && (
                  <h4 className={`${inter.className} text-[12px] text-green-400 mb-2`}>
                    Pierwszy sos gratis!
                  </h4>
                )} */}
                <div className="mb-4">
                  <ShowMore
                    items={menu.sos}
                    showAll={showAllSauces}
                    setShowAll={setShowAllSauces}
                    selectedItems={selectedSauces}
                    freeLimit={freeSauceLimit}
                    checkFunction={(item) => isSelected(item, selectedSauces)}
                    toggleFunction={(item) =>
                      toggleItem(item, selectedSauces, setSelectedSauces)
                    }
                  />
                </div>
              </>
            )}
          </div>
          
          <button
            onClick={handleAdd}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full transition-colors text-[16px] font-semibold mt-4"
          >
            Dodaj do koszyka ({totalCombinedQuantity} szt. - {totalCombinedPrice}zł)
          </button>
        </div>
      </div>
    </div>
  );
}