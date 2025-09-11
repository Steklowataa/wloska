import { Inter } from "next/font/google";
import Image from "next/image";
import DeleteItem from "./DeleteItem";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const interBold2 = Inter({ subsets: ["latin"], weight: "800" });

interface CartItemProps {
  item: {
    id: string;
    name: string;
    img: string;
    totalPrice: number;
    quantity: number;
    sauces?: any[];
    extras?: any[];
  };
  onRemove: (id: string) => void;
}

export default function CartItemProducts({ item, onRemove }: CartItemProps) {
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

  const additionalsText = getAdditionalsText(item);

  return (
    <div className="pb-6 pr-6 last:border-b-0">
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
          </div>
          <div className="flex justify-between items-center mt-1">
            <div>
              {additionalsText && (
                <p className={`${inter.className} text-sm text-white`}>
                  <strong>Dodatki:</strong> {additionalsText}
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