"use client"
import { menu } from "@/utils/text";

export default function ToggleBurger({setSelectedExtras, selectedExtras, showAllExtras, setShowAllExtras, renderItemsWithShowMore}) {
    const toggleBurgerOption = (option) => {
        setSelectedExtras((prev) =>
          prev.some(e => e.name === option.name)
            ? prev.filter(e => e.name !== option.name)
            : [...prev, option]
        );
      };
    
    return (
        <>
        <div>
            {renderItemsWithShowMore(
            menu.burgerOptions,
            selectedExtras,
            toggleBurgerOption,
            showAllExtras,
            setShowAllExtras,
            (option) => selectedExtras.some(e => e.name === option.name)
            )}
        </div>
        </>
    )
}