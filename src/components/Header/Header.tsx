"use client";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Logo from "./Logo";
import Navigation from "./Navigation";
import CartSection from "./CartSection";

const inter = Inter({
  subsets: ["latin"],
  weight: "600"
});

type HeaderProp = {
  showCart?: boolean;
}

export default function Header({showCart = true} : HeaderProp) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   useEffect(() => {
        setIsClient(true);
        const handleSize = () => {
            setIsMobile(window.innerWidth < 500);
        }
        handleSize()
        window.addEventListener('resize', handleSize)
        return () => window.removeEventListener('resize', handleSize)
    }, [])

  return (
    <>
     {isClient && !isMobile && (
      <>
         <div className="z-[100] sticky top-0 flex justify-center">
          <div
            className={`${inter.className} flex items-center justify-between overflow-hidden transition-all duration-500 ease-in-out
            ${isScrolled && !isHovered ? "w-[150px] h-[45px] md:w-[200px] md:h-[50px]" : "w-[95%] md:w-[80%] h-[56px]"} 
            rounded-3xl px-4 bg-gradient-to-r from-[#FF30B3]/10 to-[#7A0950]/10 
            bg-clip-padding backdrop-blur-md border border-white/50`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
            <Logo isScrolled={isScrolled} isHovered={isHovered} />
            <Navigation isScrolled={isScrolled} isHovered={isHovered} />
            {showCart &&  <CartSection isScrolled={isScrolled} isHovered={isHovered} />}
          </div>
        </div>
      </>
     )}
     {isClient && isMobile && (
        <div className="z-[100] sticky top-0 flex justify-center">
          <div
            className={`${inter.className} flex items-center justify-between overflow-hidden transition-all duration-500 ease-in-out
            ${isScrolled && !isHovered ? "w-[150px] h-[45px] md:w-[200px] md:h-[50px]" : "w-[95%] md:w-[80%] h-[56px]"} 
            rounded-3xl px-4 bg-gradient-to-r from-[#FF30B3]/10 to-[#7A0950]/10 
            bg-clip-padding backdrop-blur-md border border-white/50`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
            <Navigation isScrolled={isScrolled} isHovered={isHovered} />
            {showCart &&  <CartSection isScrolled={isScrolled} isHovered={isHovered} />}
          </div>
        </div>
     )}
    </>
  );
}

