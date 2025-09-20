"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import CustomerInfo from "./CustomerInfo";
import { useOrder } from "@/app/context/OrderContext";
import groupCartItems from "@/utils/GroupCartItem";
import { useMenuByLangName } from "@/utils/useMenuByLangName";

const inter = Inter({ subsets: ["latin"], weight: "600" });
const inter2 = Inter({ subsets: ["latin"], weight: "400" });

export default function ProductList({ items, totalPrice }: any) {
    const {customer} = useOrder()
    const groupedItems = groupCartItems(items)
    const text = useMenuByLangName()
    const {allMessage} = text.formVal.yourOrder[0]
    const {extrasTitle} = text.modalWindow.modalInfo[0]
    return (
        <div className="w-full max-w-[400px] bg-[#141111] rounded-[20px] p-4">
            {groupedItems.map((item: any, index: number) => (
                <div key={index} className="flex items-center gap-4 mb-10 last:mb-0">
                    <Image
                        alt={item.name}
                        src={item.img}
                        width={80}
                        height={80}
                        className="rounded-lg flex-shrink-0"/>
                    <div className="flex-1 min-w-0">
                        <p className={`${inter.className} text-white text-[16px]`}>
                            {item.name} {item.quantity > 1 ? `x${item.quantity}` : ""}
                        </p>
                        {item.additionals.length > 0 && (
                            <p className="text-[12px] text-gray-300 mt-1">
                                {extrasTitle}: {item.additionals.join(", ")}
                            </p>
                        )}
                    </div>
                    <p className={`${inter.className} text-white text-[16px] whitespace-nowrap`}>
                        {item.basePrice}zł
                    </p>
                </div>
            ))}
        <div className="w-full max-w-[500px] mt-4 pt-4 border-t border-gray-600">
            <p className={`${inter.className} text-white text-[16px] text-right`}>
                {allMessage}: {totalPrice}zł
            </p>
            <CustomerInfo customer={customer}/>
        </div>
    </div>
  );
}
