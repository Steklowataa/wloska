"use client";

interface SliderDotsProps {
    handleDotClick: (index: number) => void;
    pizzaEntries: [string, [string, number, string, string?]][];
    current: number;
}

export default function SliderDots({ handleDotClick, pizzaEntries, current }: SliderDotsProps) {
    return (
        <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex gap-2">
            {pizzaEntries.map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full ${
                        index === current ? "bg-white" : "bg-gray-600"
                    }`}
                />
            ))}
        </div>
    );
}
