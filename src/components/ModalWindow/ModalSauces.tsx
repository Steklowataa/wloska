"use client";
import { Inter } from "next/font/google";
import ShowMore from "./ShowMore";
import { useMenuByLangName } from "@/utils/useMenuByLangName";

const inter2 = Inter({ subsets: ["latin"], weight: "600" });

type Item = {
  name: string;
  price: number;
};

type ModalSaucesProps = {
  type: "pizza" | "burger" | "smashburger" | "extras" | "drinks" | "sos";
  selectedSauces: Item[];
  setSelectedSauces: (items: Item[]) => void;
  showAllSauces: boolean;
  setShowAllSauces: (show: boolean) => void;
  isSelected: (item: Item, list: Item[]) => boolean;
  toggleItem: (
    item: Item,
    list: Item[],
    setList: (items: Item[]) => void
  ) => void;
  freeSauceLimit: number;
};

export default function ModalSauces({
  type,
  selectedSauces,
  setSelectedSauces,
  showAllSauces,
  setShowAllSauces,
  isSelected,
  toggleItem,
  freeSauceLimit,
}: ModalSaucesProps) {
  const {menu} = useMenuByLangName()
  if (type === "drinks" || type === "sos" || type === "smashburger" || type === "burger") {
    return null;
  }

  return (
    <>
      <h3 className={`${inter2.className} text-[20px] mt-6 mb-2`}>Sosy</h3>
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
  );
}
