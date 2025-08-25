"use client";
import { Inter } from "next/font/google";
import ShowMore from "./ShowMore";
import { menu } from "@/utils/text";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const inter2 = Inter({ subsets: ["latin"], weight: "600" });

type Item = {
  name: string;
  price: number;
};

type ModalExtrasProps = {
  type: "pizza" | "burger" | "smashburger";
  selectedExtras: Item[];
  setSelectedExtras: (items: Item[]) => void;
  showAllExtras: boolean;
  setShowAllExtras: (show: boolean) => void;
  isSelected: (item: Item, list: Item[]) => boolean;
  toggleItem: (
    item: Item,
    list: Item[],
    setList: (items: Item[]) => void
  ) => void;
};

export default function ModalExtras({
  type,
  selectedExtras,
  setSelectedExtras,
  showAllExtras,
  setShowAllExtras,
  isSelected,
  toggleItem,
}: ModalExtrasProps) {
  if (type === "pizza") {
    return (
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
    );
  }

  if (type === "burger") {
    return (
      <>
        <h2 className={`${inter2.className} text-[20px] mt-3 mb-4`}>Dodatki</h2>
        <ShowMore
          items={menu.burgerOptions}
          showAll={showAllExtras}
          setShowAll={setShowAllExtras}
          checkFunction={(item) => isSelected(item, selectedExtras)}
          toggleFunction={(item) =>
            toggleItem(item, selectedExtras, setSelectedExtras)
          }
        />
      </>
    );
  }

  if (type === "smashburger") {
    return (
      <>
        <h2 className={`${inter2.className} text-[20px] mt-3 mb-4`}>Dodatki</h2>
        <ShowMore
          items={menu.smashOptions}
          showAll={showAllExtras}
          setShowAll={setShowAllExtras}
          checkFunction={(item) => isSelected(item, selectedExtras)}
          toggleFunction={(item) =>
            toggleItem(item, selectedExtras, setSelectedExtras)
          }
        />
      </>
    );
  }

  return null;
}
