"use client"
import { useState, useEffect } from "react";

const StableTextButtonSection = ({
  text,
  trigger
}: {
  text: string;
  trigger: string | number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState(text);

  useEffect(() => {
    setIsVisible(false);

    const changeTimer = setTimeout(() => {
      setDisplayedText(text);
      setIsVisible(true);

      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(hideTimer);
    }, 1000);

    return () => clearTimeout(changeTimer);
  }, [text, trigger]);

  return (
    <div className="mt-[60px]">
      {/* Fixed height container for text */}
      <div className="w-[500px] h-[80px] relative mb-4">
        <div
          className="absolute inset-0 text-[16px] text-white flex items-center transition-opacity duration-1000"
          style={{
            opacity: isVisible ? 1 : 0
          }}
        >
          {displayedText}
        </div>
      </div>
      
      {/* Button section - completely separate from text */}
      <div className="flex flex-row items-center gap-10">
        <div className="text-white text-[16px]">
          <p>Potrzebujesz więcej opcji?</p>
        </div>
        <div>
          <button className="bg-[#E01094] w-[190px] h-[65px] rounded-[20px] text-white">
            Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default StableTextButtonSection;