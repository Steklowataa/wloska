import { Inter } from "next/font/google";
import Image from "next/image";
import DeleteItem from "./DeleteItem";
import { useMenuByLangName } from "@/utils/useMenuByLangName";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const interBold2 = Inter({ subsets: ["latin"], weight: "800" });

type Addition = string | { name?: string };

interface CartItemUI {
  id: string;
  name: string;
  image?: string;
  totalPrice: number;
  quantity: number;
  sauces?: Addition[];
  extras?: Addition[];
}

interface CartItemProps {
  item: CartItemUI;
  onRemove: (id: string) => void;
}

export default function CartItemProducts({ item, onRemove }: CartItemProps) {
  const getAdditionalsText = (item: CartItemUI) => {
    const additions = [];

    if (item.sauces && item.sauces.length > 0) {
      const sauceNames = item.sauces.map((sauce: Addition) =>
        typeof sauce === "string" ? sauce : sauce?.name || "Unknown sauce"
      );
      additions.push(...sauceNames);
    }

    if (item.extras && item.extras.length > 0) {
      const extraNames = item.extras.map((extra: Addition) =>
        typeof extra === "string" ? extra : extra?.name || "Unknown extra"
      );
      additions.push(...extraNames);
    }

    return additions.join(", ");
  };

  const additionalsText = getAdditionalsText(item);
  const menu = useMenuByLangName()
  const { extrasTitle} = menu.modalWindow.modalInfo[0]
  console.log("Image:", item.image)

  return (
    <div className="pb-6 pr-6 last:border-b-0">
      <div className="flex gap-4 items-start">
      {item.image ? (
        <Image
          src={item.image}
          alt={item.name}
          style={{ objectFit: "cover" }}
          width={150}
          height={150}
          className="rounded-lg"
        />
      ) : null}
        <div className="flex-1 flex flex-col justify-between mt-[30px]">
          <div className="flex justify-between items-start">
            <p className={`${interBold2.className} text-[20px]`}>
              {item.name}
              {item.quantity > 1 && ` ×${item.quantity}`}
            </p>
            <span className={`${interBold2.className} text-[16px]`}>
              {item.totalPrice} zł
            </span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <div>
              {additionalsText && (
                <p className={`${inter.className} text-sm text-white`}>
                  <strong>{extrasTitle}:</strong> {additionalsText}
                </p>
              )}
            </div>
            <DeleteItem onDelete={() => onRemove(item.id)}/>
          </div>
        </div>
      </div>
      <div className="border-b-4 border-[#960B63] w-2/3 mx-auto mt-6"></div>
    </div>
  );
}
