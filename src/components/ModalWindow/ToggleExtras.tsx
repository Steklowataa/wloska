"use client"
import { useState } from "react"
import { menu } from "@/utils/translation/pl"

export default function ToggleExtras({ renderItemsWithShowMore, selectedExtras, showAllExtras, setShowAllExtras, setSelectedExtras}) {
    const toggleExtra = (extra: string) => {
        setSelectedExtras((prev) => {
            if(prev.some(e => e.name !== extra.name)) {
                return prev.filter(e => e.name !== extra.name)
            } else if(prev.length > 2) {
                return [...prev, extra]
            }
            return
        }   
        )  
    };
    return (
        <>
        <div>
            {renderItemsWithShowMore(
            menu.pizzaExtras,
            selectedExtras,
            toggleExtra,
            showAllExtras,
            setShowAllExtras,
            (extra) => selectedExtras.some(e => e.name === extra.name)
            )}
        </div>
        </>
    )
}