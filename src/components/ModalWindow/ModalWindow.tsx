"use client";
import { useState, useRef, useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import { menu } from "@/utils/text";
import { Item, ModalWindowProps } from "./types";
import { isSelected, toggleItem, calculateSaucesPrice } from "./utils";
import ModalHeader from "./ModalHeader";
import ModalQuantity from "./ModalQuantity";
import ModalExtras from "./ModalExtras"
import ModalSauces from "./ModalSauces";

export default function ModalWindow(props: ModalWindowProps) {
  const { name, description, type, img, price, onClose } = props;
  const { addToCart } = useCart();

  const [selectedSauces, setSelectedSauces] = useState<Item[]>([]);
  const [selectedExtras, setSelectedExtras] = useState<Item[]>([]);
  const [productQuantity, setProductQuantity] = useState(1);
  const [setQuantity, setSetQuantity] = useState(0);
  const [showAllSauces, setShowAllSauces] = useState(false);
  const [showAllExtras, setShowAllExtras] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 200;
  }, []);

  const includesFreeSauce =
    description.toLowerCase().includes("sosem do wyboru") ||
    description.toLowerCase().includes("sos do wyboru");
  const freeSauceLimit = includesFreeSauce ? 1 : 0;

  const saucesPrice = calculateSaucesPrice(selectedSauces, includesFreeSauce);
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
        img,
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
        img,
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
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center z-200">
      <div className="bg-black rounded-[30px] text-white w-[380px] sm:w-[440px] max-h-[90vh] p-4 border border-gray-600 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-[24px] w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded-full z-10"
        >
          ×
        </button>
        <div ref={scrollRef} className="overflow-y-auto max-h-[90vh] p-6 flex flex-col">
          <ModalHeader img={img} name={name} description={description} />
          <ModalQuantity
            type={type}
            name={name}
            price={price}
            productQuantity={productQuantity}
            setProductQuantity={setProductQuantity}
            setQuantity={setQuantity}
            setSetQuantity={setSetQuantity}
          />
          <ModalExtras
            type={type}
            selectedExtras={selectedExtras}
            setSelectedExtras={setSelectedExtras}
            showAllExtras={showAllExtras}
            setShowAllExtras={setShowAllExtras}
            isSelected={isSelected}
            toggleItem={toggleItem}
          />
          <ModalSauces
            type={type}
            selectedSauces={selectedSauces}
            setSelectedSauces={setSelectedSauces}
            showAllSauces={showAllSauces}
            setShowAllSauces={setShowAllSauces}
            freeSauceLimit={freeSauceLimit}
            isSelected={isSelected}
            toggleItem={toggleItem}
          />
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