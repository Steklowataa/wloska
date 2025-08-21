"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

const ImageAppear = ({
    src,
    trigger,
    duration = 1000
} : {
    src: string,
    trigger: string | number,
    duration?: number
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [currentSrc, setCurrentSrc] = useState(src)

    useEffect(() => {
        setIsVisible(false)

        const timer = setTimeout(() => {
            setCurrentSrc(src)
            setIsVisible(true)
        }, duration)

        return () => clearTimeout(timer)
    }, [src, trigger, duration])

    return (
        <div>
            <Image
                src={src}
                alt={src} 
                width={500} 
                height={500} 
                className="absolute right-30 top-1/5 object-cover transition-opacity"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity ${duration}ms ease-in-out`
                }}/>
        </div>
    )
}

export default ImageAppear