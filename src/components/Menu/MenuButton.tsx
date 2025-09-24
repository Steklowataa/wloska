"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useMenuByLangName } from "@/utils/useMenuByLangName";

export default function MenuButtons() {
  const { menu } = useMenuByLangName();

  // Funkcja pomocnicza do pobierania tłumaczeń z menu.title
  const getLabel = (id: string) => {
    type TitleItem = { id: string } & Record<string, string>;
    const found = menu.title.find((t: TitleItem) => t.id === id);
    if (!found) return id;
    const entry = Object.entries(found).find(([key]) => key !== "id");
    return (entry && entry[1]) || id;
  };

  // Memoize items array to prevent unnecessary re-renders
  const items = useMemo(() => [
    { key: "pizza", id: "Pizza", label: getLabel("Pizza") },
    { key: "burger", id: "Burgery", label: getLabel("Burgery") },
    { key: "smashburger", id: "SmashBurgery", label: getLabel("SmashBurgery") },
    { key: "extras", id: "Przystawki", label: getLabel("Przystawki") },
    { key: "drinks", id: "Napoje", label: getLabel("Napoje") },
    { key: "sos", id: "Sosy", label: getLabel("Sosy") },
  ], [menu.title]); // Only recreate when menu.title changes

  const sectionref = useRef<(HTMLElement | null)[]>([]);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const [activeButton, setActiveButton] = useState<number>(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    items.forEach((item, index) => {
      const section = document.getElementById(item.id);
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
  }, [items]); // Now items is properly memoized

  const handleButtonClick = (index: number): void => {
    isScrolling.current = true;
    setActiveButton(index);

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    const element = document.getElementById(items[index].id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
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
      {/* Mobile View */}
      <div className="block md:hidden">
        {/* Możesz tu zrobić np. dropdown albo slider */}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-center sticky top-20 z-50 px-6">
        <div className="flex flex-nowrap items-center space-x-4 py-3 px-4 rounded-[50px] w-fit shadow-sm bg-gray/10 backdrop-blur-md">
          {items.map((element, index) => (
            <button
              key={element.key}
              onClick={() => handleButtonClick(index)}
              className={`transition-transform easy-in-out hover:scale-105 cursor-pointer px-5 py-2 text-lg md:text-[16px] font-semibold rounded-[20px] ease-in-out duration-700 ${
                index === activeButton
                  ? "bg-[#370424] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {element.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}