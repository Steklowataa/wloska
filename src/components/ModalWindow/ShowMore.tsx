"use client";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

type Item = {
  name: string;
  price: number;
};

type ShowMoreProps = {
  items: Item[];
  showAll: boolean;
  setShowAll: (show: boolean) => void;
  checkFunction: (item: Item) => boolean;
  toggleFunction: (item: Item) => void;
  selectedItems?: Item[];
  freeLimit?: number;
};

export default function ShowMore({
  items,
  showAll,
  setShowAll,
  checkFunction,
  toggleFunction,
  selectedItems = [],
  freeLimit = 0,
}: ShowMoreProps) {
  const visibleItemsToRender = showAll ? items : items.slice(0, 6);
  const hasMoreToShow = items.length > 6;

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {visibleItemsToRender.map((item, index) => {
          const selectedIndex = selectedItems.findIndex((selectedItem) => selectedItem.name === item.name);
          const isFree = selectedIndex !== -1 && selectedIndex < freeLimit;
          const displayPrice = isFree ? 0 : item.price;

          return (
            <label
              key={item.name}
              className="flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={checkFunction(item)}
                    onChange={() => toggleFunction(item)}
                    className="sr-only"
                  />
                  <div
                    className={`w-4 h-4 border-2 rounded-sm mr-3 transition-colors ${
                      checkFunction(item)
                        ? "bg-green-500 border-green-500"
                        : "border-gray-500 group-hover:border-gray-400"
                    }`}
                  >
                    {checkFunction(item) && (
                      <svg
                        className="w-3 h-3 text-white absolute top-0 left-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <span
                  className={`${inter.className} text-[14px] text-white group-hover:text-gray-300 transition-colors`}
                >
                  {item.name}
                </span>
              </div>
              <span className={`${inter.className} text-[12px] ${isFree ? 'text-green-400' : 'text-gray-400'}`}>
                {freeLimit > 0 && selectedItems.length === 0 ? "0zł" : isFree ? "0zł" : `+${displayPrice}zł`}
              </span>
            </label>
          );
        })}
      </div>

      {hasMoreToShow && (
        <div>
          <button
            onClick={() => setShowAll(!showAll)}
            className={`${inter.className} text-[14px] text-green-400 hover:text-green-300 transition-colors mt-3 flex items-center`}
          >
            {showAll ? (
              <>
                <span>Pokaż mniej</span>
                <svg
                  className="w-4 h-4 ml-1 transform rotate-180"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            ) : (
              <>
                <span>Pokaż więcej ({items.length - 6})</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </>
  );
}