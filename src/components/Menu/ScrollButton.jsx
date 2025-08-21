"use client"
import { useEffect, useState } from "react"
import {ArrowUp } from 'lucide-react'

export default function ScrollButton () {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollTo = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (
        <>
        <button onClick={scrollTo}
        className={`easy-in-out hover:scale-105 fixed bottom-4 right-4 z-50 p-3 rounded-full bg-[#7A0950] text-white shadow-blue-600
        transition-opacity duration-300 md:hidden ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
        aria-label="Scroll to top">
            <ArrowUp />
        </button>
        </>
    )
}