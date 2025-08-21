"use client"
import { useState, useEffect } from "react";
import TypingText from "@/components/Home/TypingText";
import SpinningEllipse from "@/components/Home/SpinEllipse";
import EffectAppear from "@/components/Home/EffectAppear";
import ImageAppear from "@/components/Home/ImageAppear";
import Header from "@/components/Header";
import { text } from "../utils/text"
import ButtonToMenu from "@/components/Home/ButtonToMenu";

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
            <div className="mt-[100px] ml-[100px] relative z-10">
                <div className="text-[80px] font-bold leading-[80px] ">
                    <div className="h-[80px] flex items-center">
                        <TypingText 
                             speed={80}
                             text={text.header[currentIndex].name}
                             trigger={currentIndex}
                        />
                    </div>
                    <div className="ml-10 h-[80px] flex items-center" style={{ color: text.header[currentIndex].color }}>
                        <TypingText 
                             speed={80}
                             text={text.header[currentIndex].subtitle}
                             delay={500}
                             trigger={currentIndex}
                        />
                    </div>
                    <div className="w-[500px] text-[16px] h-[60px] flex items-center mt-10">
                      <EffectAppear text={text.secondHeader[currentIndex].text} trigger={currentIndex}/>
                    </div>
                </div>
            </div>
            <div className="mt-[100px]">
                <ButtonToMenu />
            </div>
        </>
    );
}