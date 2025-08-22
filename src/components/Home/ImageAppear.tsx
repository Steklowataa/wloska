"use client"
import { useEffect, useState, useRef } from "react"
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
    const [currentSrc, setCurrentSrc] = useState(src)
    const [isVisible, setIsVisible] = useState(true)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        if (src === currentSrc) {
            setIsVisible(true)
            return
        }

        setCurrentSrc(src)
        setIsVisible(false)
        
        timeoutRef.current = setTimeout(() => {
            setIsVisible(true)
        }, 50)

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [src, trigger])


    useEffect(() => {
        setCurrentSrc(src)
        setIsVisible(true)
    }, [])

    return (
        <div>
            <Image
                src={currentSrc}
                alt={currentSrc}
                width={500}
                height={500}
                className="absolute right-30 top-1/5 object-cover"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity ${duration}ms cubic-bezier(0.25, 0.8, 0.25, 1)`
                }}
            />
        </div>
    )
}

export default ImageAppear