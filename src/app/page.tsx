"use client"
import { useState, useEffect } from "react";
import TypingText from "@/components/Home/TypingText";
import SpinningEllipse from "@/components/Home/SpinEllipse";
import EffectAppear from "@/components/Home/EffectAppear";
import ImageAppear from "@/components/Home/ImageAppear";
import Header from "@/components/Header/Header";
import ButtonToMenu from "@/components/Home/ButtonToMenu";
import { Playfair_Display, Inter } from "next/font/google";
import { useMenuByLangName } from "@/utils/useMenuByLangName";
import MarqueBar from "@/components/Home/MarqueBar";
import BestGradedPosition from "@/components/Home/BestGradedPosition";


const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: "800"
})

const inter = Inter({
    subsets: ["latin"],
    weight: "600"
})

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { text }= useMenuByLangName()
    
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
              <ImageAppear src={text.images[currentIndex].img} alt={text.header[currentIndex].name} trigger={currentIndex} duration={1000}/>
            </div>
            <div className="mt-[100px] ml-[100px] relative z-10">
                <div className="text-[80px] font-bold leading-[80px] ">
                    <div className={`${playfair.className} h-[80px] flex items-center`}>
                        <TypingText 
                             speed={80}
                             text={text.header[currentIndex].name}
                             trigger={currentIndex}
                        />
                    </div>
                    <div className={`${playfair.className} ml-10 h-[80px] flex items-center`} style={{ color: text.header[currentIndex].color }}>
                        <TypingText 
                             speed={80}
                             text={text.header[currentIndex].subtitle}
                             delay={500}
                             trigger={currentIndex}
                        />
                    </div>
                    <div className={`${inter.className} w-[450px] text-[16px] h-[60px] flex items-center mt-20`}>
                      <EffectAppear text={text.secondHeader[currentIndex].text} trigger={currentIndex}/>
                    </div>
                </div>
            </div>
            <div className="mt-[100px]">
                <ButtonToMenu />
            </div>
            <div className="mt-[100px]">
                <MarqueBar />
            </div>
            <div>
                <BestGradedPosition />
            </div>
        </>
    );
}