import { useState, useEffect } from "react";
import TypingText from "@/components/Home/TypingText";
import SpinningEllipse from "@/components/Home/SpinEllipse";

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const pizzaData = [
        { name: "Margherita", subtitle: "Classica", description: "...", color: '#22c55e' },
        { name: "Pepperoni", subtitle: "Piccante", description: "...", color: '#ef4444' },
        { name: "Quattro", subtitle: "Stagioni", description: "...", color: '#eab308' },
        { name: "Salami", subtitle: "Bianca", description: "...", color: '#3b82f6' }
    ];

    const currentPizza = pizzaData[currentIndex];

    // Obliczamy czas potrzebny na wyświetlenie obu tekstów
    const firstTextTime = currentPizza.name.length * 250; // speed 250ms
    const secondTextDelay = 1000; // delay dla drugiego słowa
    const secondTextTime = currentPizza.subtitle.length * 250;
    const totalTime = firstTextTime + secondTextDelay + secondTextTime + 1000; // +2s pauza

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % pizzaData.length);
        }, totalTime);

        return () => clearTimeout(timer);
    }, [currentIndex, totalTime]);

    return (
        <>
            <SpinningEllipse />
            <div className="mt-[200px] ml-[100px] relative z-10">
                <div className="text-[80px] font-bold leading-tight min-h-[160px]">
                    <div>
                        <TypingText 
                            speed={250} 
                            text={currentPizza.name} 
                            trigger={currentIndex}
                        />
                    </div>
                    <div className="ml-10" style={{ color: currentPizza.color }}>
                        <TypingText 
                            speed={250} 
                            text={currentPizza.subtitle} 
                            delay={1000} 
                            trigger={currentIndex}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
