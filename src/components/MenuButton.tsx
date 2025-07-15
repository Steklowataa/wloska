"use client";
import { useState } from 'react';
import { useEffect, useRef } from 'react';


export default function MenuButtons() {
  const items: string[] = ["Pizza", "Burgery", "SmashBurgery", "Przystawki", "Napoje", "Sosy"];
  const sectionref = useRef<(HTMLElement | null)[]>([])
  const isClicked = useRef(false)

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
              if (entry.isIntersecting) {
                setActiveButton(index);
              }
            });
          },
          {
            root: null,
            rootMargin: "-30% 0px -60% 0px",
            threshold: 1, 
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
  

  const firstRow = items.slice(0, 3);
  const secondRow = items.slice(3);

  const [activeButton, setActiveButton] = useState<number>(0);

  const handleButtonClick = (index: number): void => {
    setActiveButton(index);

    const sectionId = items[index].toLowerCase();
    const element = document.getElementById(sectionId)
    if(element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };


  return (
    <>
      {/* Mobile view (two rows) */}
      <div className="flex flex-col space-y-3 md:hidden p-3 ">
        <div className="flex justify-between space-x-2">
          {firstRow.map((element, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`cursor-pointer text-white px-4 py-3 text-base font-semibold rounded-[20px] transition-all ease-in-out duration-300 flex-1 ${
                index === activeButton ? "bg-[#370424] text-white" : "text-white"
              }`}
            >
              {element}
            </button>
          ))}
        </div>
        <div className="flex justify-between space-x-2">
          {secondRow.map((element, index) => {
            const actualIndex = index + 3;
            return (
              <button
                key={actualIndex}
                onClick={() => handleButtonClick(actualIndex)}
                className={`cursor-pointer text-white px-4 py-3 text-base font-semibold rounded-[20px] transition-all ease-in-out duration-700 flex-1 ${
                  actualIndex === activeButton ? "bg-[#370424] text-white" : "text-white"
                }`}
              >
                {element}
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop view (one row) */}
      <div className="grid grid-cols-4 gap-x-8 px-6 relative sticky top-0 z-9">
  {/* Pasek przycisków w kolumnie 2–5 */}
  <div className="col-span-5 col-start-2 sticky top-0 z-50">
    <div className="flex flex-nowrap items-center space-x-4 py-3 px-4 rounded-[50px] w-fit border border-white/20 shadow-sm bg-gray/10 backdrop-blur-md">
      {items.map((element, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(index)}
          className={`cursor-pointer px-5 py-2 text-lg md:text-[16px] font-semibold rounded-[20px] transition-colors ease-in-out duration-700 ${
            index === activeButton ? "bg-[#370424] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {element}
        </button>
      ))}
    </div>
  </div>
  </div>

    </>
  );
}
