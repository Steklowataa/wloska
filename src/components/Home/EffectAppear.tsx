"use client"
import { useState, useEffect } from "react";

const EffectAppear = ({
  text,
  trigger,
  duration = 1000,
  visibleTime = 3000
}: {
  text: string;
  trigger: string | number;
  duration?: number;
  visibleTime?: number;
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
      }, visibleTime);

      return () => clearTimeout(hideTimer);
    }, duration);

    return () => clearTimeout(changeTimer);
  }, [text, trigger, duration, visibleTime]);

  return (
    <div
      className="mt-6 text-lg text-white max-w-2xl transition-opacity min-h-[48px]" 
      style={{
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: isVisible ? 1 : 0
      }}
    >
      {displayedText}
    </div>
  );
};

export default EffectAppear;