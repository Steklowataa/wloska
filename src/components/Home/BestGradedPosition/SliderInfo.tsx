"use client";
import { Plus } from "lucide-react";

interface SliderInfoProps {
    name: string;
    description: string;
    price: number;
    addToCartText: string;
}

function SelectButton({ addToCartText }: { addToCartText: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="font-bold mb-1">{addToCartText}</span>
            <button className="flex items-center justify-center w-10 h-10 border border-white rounded-full hover:bg-white hover:text-black transition">
                <Plus size={20} />
            </button>
        </div>
    );
}

export default function SliderInfo({ name, description, price, addToCartText }: SliderInfoProps) {
    return (
        <div className="flex justify-between items-end w-full px-6 mt-6">
            <div className="max-w-md">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="text-sm text-gray-300">
                    {description}
                </p>
            </div>
            <div className="flex flex-col items-center">
                <SelectButton addToCartText={addToCartText} />
                <p className="text-3xl mt-2">{price}zł</p>
            </div>
        </div>
    );
}
