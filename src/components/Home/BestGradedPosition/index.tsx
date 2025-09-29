"use client";
import { useState } from "react";
import { useMenuByLangName } from "@/utils/useMenuByLangName";
import SliderImage from "./SliderImage";
import SliderControls from "./SliderControls";
import SliderInfo from "./SliderInfo";
import SliderDots from "./SliderDots";

type Direction = "left" | "right";

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
        <div className="bg-black text-white flex flex-col items-center py-10">
            <h2 className="text-2xl font-serif mb-6">{bestGradedText}</h2>
            <div className="relative flex flex-col items-center w-full max-w-4xl">
                <div className="relative flex items-center justify-center w-full">
                    <SliderImage
                        current={current}
                        direction={direction}
                        imageSrc={currentPizza[1][2]}
                        altText={currentPizza[0]}
                    />
                    <SliderControls
                        paginate={paginate}
                    />
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
            </div>
        </div>
    );
}