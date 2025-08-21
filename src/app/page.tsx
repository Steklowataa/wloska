"use client"
import { useState, useEffect } from "react";
import TypingText from "@/components/Home/TypingText";
import SpinningEllipse from "@/components/Home/SpinEllipse";
import EffectAppear from "@/components/Home/EffectAppear";
import ImageAppear from "@/components/Home/ImageAppear";
import Header from "@/components/Header";
import { text } from "../utils/text"


export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentSecondHeader = text.secondHeader[currentIndex]

    const currentPizza = text.header[currentIndex];

    const firstTextTime = currentPizza.name.length * 200; // speed 
    const secondTextDelay = 1000; // delay dla drugiego słowa
    const secondTextTime = currentPizza.subtitle.length * 250;
    const totalTime = firstTextTime + secondTextDelay + secondTextTime + 1500; // tu mozna dodac pauze

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % text.header.length);
        }, totalTime);

        return () => clearTimeout(timer);
    }, [currentIndex, totalTime]);

    return (
        <>
            <Header />
            <SpinningEllipse />
            <div>
              <ImageAppear src={text.images[currentIndex].img} trigger={currentIndex} duration={1000}/>
            </div>
            <div className="mt-[200px] ml-[100px] relative z-10">
                <div className="text-[80px] font-bold leading-tight min-h-[160px]">
                    <div>
                        <TypingText 
                            speed={80} 
                            text={text.header[currentIndex].name} 
                            trigger={currentIndex}
                        />
                    </div>
                    <div className="ml-10 min-h-30" style={{ color: text.header[currentIndex].color }}>
                        <TypingText 
                            speed={80} 
                            text={text.header[currentIndex].subtitle} 
                            delay={500} 
                            trigger={currentIndex}
                        />
                    </div>
                    <div className="w-[500px] text-[16px]">
                      <EffectAppear text={text.secondHeader[currentIndex].text} trigger={currentIndex}/>
                    </div>
                </div>
            </div>
        </>
    );
}
