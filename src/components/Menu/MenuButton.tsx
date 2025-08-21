"use client";
import { useState, useEffect, useRef } from 'react';

export default function MenuButtons() {
  const items: string[] = ["Pizza", "Burgery", "SmashBurgery", "Przystawki", "Napoje", "Sosy"];
  const sectionref = useRef<(HTMLElement | null)[]>([]);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const [activeButton, setActiveButton] = useState<number>(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
  
    items.forEach((item, index) => {
      const sectionId = item.toLowerCase();
      const section = document.getElementById(sectionId);
      sectionref.current[index] = section;
  
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !isScrolling.current) {
                setActiveButton(index);
              }
            });
          },
          {
            root: null,
            rootMargin: "-20% 0px -50% 0px",
            threshold: 0.3,
          }
        );
  
        observer.observe(section); 
        observers.push(observer);
      }
    });
  
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleButtonClick = (index: number): void => {
    isScrolling.current = true;
    setActiveButton(index);

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    const sectionId = items[index].toLowerCase();
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <>
      {/* Mobile View - Alternative Structure */}
      <div className="block md:hidden">
      
      </div>
  
      {/* Desktop View */}
      <div className="hidden md:flex justify-center sticky top-30 z-50 px-6">
      <div className="flex flex-nowrap items-center space-x-4 py-3 px-4 rounded-[50px] w-fit shadow-sm bg-gray/10 backdrop-blur-md">
            {items.map((element, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`transition-transform duration-300 easy-in-out hover:scale-105 cursor-pointer px-5 py-2 text-lg md:text-[16px] font-semibold rounded-[20px] transition-colors ease-in-out duration-700 ${
                  index === activeButton
                    ? "bg-[#370424] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {element}
              </button>
            ))}
          </div>
        </div>
    </>
  );
}