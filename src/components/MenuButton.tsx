"use client"
import { useState } from 'react';


export default function MenuButtons() {
  const items:string[] = ["Pizza", "Burgery", "SmashBurgery", "Przystawki", "Napoje", "Sosy"];
  
  const firstRow = items.slice(0, 3);
  const secondRow = items.slice(3);
  
  const [activeButton, setActiveButton] = useState<number>(0);

  const handleButtonClick = (index: number): void => {
    setActiveButton(index);

    // const sectionId = items[index].toLowerCase();
    // const element = document.getElementById(sectionId);
    // if (element) {
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }
  };
  
  return (
    <>
      {/* Mobile view (two rows) */}
      <div className="flex flex-col space-y-3 md:hidden bg-black p-3">
        <div className="flex justify-between space-x-2">
          {firstRow.map((element, index) => {
            return (
              <button 
                className={`text-white px-4 py-3 text-base font-semibold rounded-[20px] transition-all easy-in-out duration-300 flex-1 ${
                  index === activeButton ? "bg-menu-btn text-white" : "text-white"
                }`}
                key={index}
                onClick={() => handleButtonClick(index)}
              >
                {element}
              </button>
            )
          })}
        </div>
        <div className="flex justify-between space-x-2">
          {secondRow.map((element, index) => {
            const actualIndex = index + 3;
            return (
              <button 
                className={`text-white px-4 py-3 text-base font-semibold rounded-[20px] transition-all easy-in-out duration-700 flex-1 ${
                  actualIndex === activeButton ? "bg-menu-btn text-white" : "text-white "
                }`}
                key={actualIndex}
                onClick={() => handleButtonClick(actualIndex)}
              >
                {element}
              </button>
            )
          })}
        </div>
      </div>
      
      {/* Desktop view (one row) */}
      <div className="hidden md:flex flex-nowrap justify-left bg-black space-x-4 py-4 px-4">
        {items.map((element, index) => {
          return (
            <button 
              className={`text-white px-5 py-2 text-lg md:text-[16px] font-semibold rounded-[20px] transition-colors easy-in-liniar duration-700 ${
                index === activeButton ? "bg-menu-btn text-white" : "text-white "
              }`}
              key={index}
              onClick={() => handleButtonClick(index)}
            >
              {element}
            </button>
          )
        })}
      </div>
      
      {/* Example of sections that would be scrolled to (for demonstration) */}
      {/* In your actual code, you would have these sections defined elsewhere */}
      <div className="hidden">
        {items.map((item) => (
          <div id={item.toLowerCase()} key={item}>
            {/* Content for each section */}
          </div>
        ))}
      </div>
    </>
  )
}