"use client"
import { useState } from "react"
import { menu } from "@/utils/text";

export default function ToggleSause({ selectedSauces, showAllSauces, setShowAllSauces, renderItemsWithShowMore, setSelectedSauces}) {
    const toggleSauce = (sauce) => {
        setSelectedSauces((prev) =>
          prev.some(s => s.name === sauce.name)
            ? prev.filter(s => s.name !== sauce.name)
            : [...prev, sauce]
        );
      };
    
    return (
        <>
        <div className="mb-6">
            {renderItemsWithShowMore(
                menu.sos,
                selectedSauces,
                toggleSauce,
                showAllSauces,
                setShowAllSauces,
                (sauce) => selectedSauces.some(s => s.name === sauce.name)
            )}
        </div>
        </>
    )
}