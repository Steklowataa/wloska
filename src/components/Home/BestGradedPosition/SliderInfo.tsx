"use client";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const interBold = Inter({ subsets: ["latin"], weight: "800" });
const inter = Inter({ subsets: ["latin"], weight: "400" });
const interItalic = Inter({ subsets: ["latin"], weight: "400", style: ["italic"]});
const playfair = Playfair_Display({ subsets: ["latin"], weight: "800" });

interface SliderInfoProps {
    name: string;
    description: string;
    price: number;
    addToCartText: string;
    onAddToCart: () => void;
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
};

function SelectButton({ addToCartText, onAddToCart }: { addToCartText: string , onAddToCart: () => void}) {
    return (
        <div className="flex flex-col items-center">
            <button onClick={onAddToCart} className="cursor-pointer flex items-center justify-center w-8 h-8 border border-white rounded-full hover:bg-white hover:scale-120 hover:text-black transition">
                <Plus size={20} />
            </button>
            <span className={`${playfair.className} text-sm md:text-[16px] text-white mb-1`}>{addToCartText}</span>
        
        </div>
    );
}

export default function SliderInfo({ name, description, price, addToCartText, onAddToCart }: SliderInfoProps) {
    return (
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center md:items-end w-full px-6 mt-6 gap-4 md:gap-0">
            <div className="max-w-md text-center md:text-left">
                <h3 className={`${interBold.className} text-2xl md:text-[30px]`}>{name}</h3>
                <p className={`${inter.className} text-sm md:text-[16px] text-gray-400}`}>
                    {description}
                </p>
            </div>
            <div className="flex flex-col items-center">
                <SelectButton addToCartText={addToCartText} onAddToCart={onAddToCart}/>
                <p className={`${interItalic.className} text-xl md:text-[26px]`}>{price}zł</p>
            </div>
        </motion.div>
    );
}
