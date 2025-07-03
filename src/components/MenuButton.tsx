"use client";
import { useState } from 'react';


export default function MenuButtons() {
  const items: string[] = ["Pizza", "Burgery", "SmashBurgery", "Przystawki", "Napoje", "Sosy"];

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
      <div className="flex flex-wrap justify-center p-3 sm:pt-0.5 ml-[300px] sticky top-0 z-50">
  <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10 w-full">
    <div className="col-span-full">
      <div className="hidden md:flex flex-nowrap items-center space-x-4 py-3 px-4 bg-black bg-opacity-80 rounded-lg w-fit backdrop-blur-sm">
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
</div>
    </>
  );
}
