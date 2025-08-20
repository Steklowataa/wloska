"use client"
import { useState, useEffect } from "react";
import TypingText from "@/components/Home/TypingText";
import SpinningEllipse from "@/components/Home/SpinEllipse";
import EffectAppear from "@/components/Home/EffectAppear";
import ImageAppear from "@/components/Home/ImageAppear";


export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
      "/images/bianca.svg",
      "/images/z-gruszka.svg",
      "/images/4-sery.png",
      "/images/4-miesa.svg"
    ]

    const pizzaData = [
        { name: "Salami", subtitle: "Bianca", description: "...", color: '#E01094' },
        { name: "Pizza z", subtitle: "Gruszką", description: "...", color: '#940C62' },
        { name: "Pizza", subtitle: "Cezar", description: "...", color: '#43A9F7' },
        { name: "Quatro", subtitle: "Carni", description: "...", color: '#0F7BCE' }
    ];

    const secondHeader = [
      {text: "Salami Bianca to idealna propozycja dla fanów intensywnych smaków i kremowej bazy. Na delikatnym sosie śmietanowym układamy aromatyczne pieczarki"},
      {text: "Pizza z Gruszką to wyjątkowe połączenie delikatności i charakteru. Na kremowym sosie układamy soczyste plastry gruszki, rukolę i gorgonzolę, całość"},
      {text: "Pizza Cezar to wariacja na temat klasycznej sałatki. Na sosie śmietanowym znajdziesz kawałki soczystego kurczaka, czarne oliwki i czerwoną cebulkę, "},
      {text: "Quatro Carni to propozycja dla miłośników mięsnych smaków. Na bazie aromatycznego sosu znajdziesz szynkę, pikantną spianatę, chrupiące frankfurterki"}
    ]

    const currentSecondHeader = secondHeader[currentIndex]

    const currentPizza = pizzaData[currentIndex];

    const firstTextTime = currentPizza.name.length * 200; // speed 
    const secondTextDelay = 1000; // delay dla drugiego słowa
    const secondTextTime = currentPizza.subtitle.length * 250;
    const totalTime = firstTextTime + secondTextDelay + secondTextTime + 1500; // tu mozna dodac pauze

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % pizzaData.length);
        }, totalTime);

        return () => clearTimeout(timer);
    }, [currentIndex, totalTime]);

    return (
        <>
            <SpinningEllipse />
            <div>
              <ImageAppear src={images[currentIndex]} trigger={currentIndex} duration={1000}/>
            </div>
            <div className="mt-[200px] ml-[100px] relative z-10">
                <div className="text-[80px] font-bold leading-tight min-h-[160px]">
                    <div>
                        <TypingText 
                            speed={80} 
                            text={currentPizza.name} 
                            trigger={currentIndex}
                        />
                    </div>
                    <div className="ml-10 min-h-30" style={{ color: currentPizza.color }}>
                        <TypingText 
                            speed={80} 
                            text={currentPizza.subtitle} 
                            delay={500} 
                            trigger={currentIndex}
                        />
                    </div>
                    <div className="w-[500px] text-[16px]">
                      <EffectAppear text={currentSecondHeader.text} trigger={currentIndex}/>
                    </div>
                </div>
            </div>
        </>
    );
}
