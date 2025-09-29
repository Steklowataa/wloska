"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMenuByLangName } from "@/utils/useMenuByLangName";
import SliderImage from "./SliderImage";
import SliderControls from "./SliderControls";
import SliderInfo from "./SliderInfo";
import SliderDots from "./SliderDots";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "800" });

type Direction = "left" | "right";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
};

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

export default function BestGradedPosition() {
    const { menu, homeText } = useMenuByLangName();
    const pizzaEntries = Object.entries(menu.pizza).slice(0, 4);
    const [[current, direction], setCurrent] = useState<[number, Direction]>([0, "right"]);

    const bestGradedText = homeText.homeText[0]?.bestGraded;
    const addToCartText = homeText.homeText[0]?.addToCart;

    const paginate = (newDirection: Direction) => {
        if (newDirection === "right") {
            setCurrent([current === pizzaEntries.length - 1 ? 0 : current + 1, "right"]);
        } else {
            setCurrent([current === 0 ? pizzaEntries.length - 1 : current - 1, "left"]);
        }
    };

    const handleDotClick = (index: number) => {
        const newDirection: Direction = index > current ? "right" : "left";
        setCurrent([index, newDirection]);
    }

    const currentPizza = pizzaEntries[current];

    return (
        <>
        <Image 
            src="/images/bestGradePositionOrnament.svg"
            alt=""
            width={500}
            height={500}
            className="absolute w-full h-full"/>
         <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="bg-black text-white flex flex-col items-center py-10">
            <motion.h2 variants={itemVariants} className={`${playfair.className} text-2xl font-serif mb-6`}>
                {bestGradedText}
            </motion.h2>
            <motion.div variants={itemVariants} className="relative flex flex-col items-center w-full max-w-4xl">
                <div className="relative flex items-center justify-center w-full">
                    <SliderImage
                        current={current}
                        direction={direction}
                        imageSrc={currentPizza[1][2]}
                        altText={currentPizza[0]}
                    />
                    <SliderControls paginate={paginate} />
                    <SliderDots
                        handleDotClick={handleDotClick}
                        pizzaEntries={pizzaEntries}
                        current={current}
                    />
                </div>
                <SliderInfo
                    name={currentPizza[0]}
                    description={currentPizza[1][0]}
                    price={currentPizza[1][1]}
                    addToCartText={addToCartText}
                />
            </motion.div>
        </motion.div>
        </>
       
    );
}