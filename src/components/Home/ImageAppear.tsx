"use client"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

const ImageAppear = ({
    src,
    alt,
    trigger,
    duration = 1000,
    style,
    className,
}: {
    src: string;
    alt: string;
    trigger: string | number;
    duration?: number;
    style?: React.CSSProperties;
    className?: string;
}) => {
    const [currentSrc, setCurrentSrc] = useState(src);
    const [isVisible, setIsVisible] = useState(true);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        if (src === currentSrc) {
            setIsVisible(true);
            return;
        }

        setCurrentSrc(src);
        setIsVisible(false);

        timeoutRef.current = setTimeout(() => {
            setIsVisible(true);
        }, 50);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [src, trigger, currentSrc]);

    return (
        <div>
            <Image
                src={currentSrc}
                alt={alt}
                width={500}
                height={500}
                className={className}
                style={{
                    ...style,
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity ${duration}ms ease-in-out`,
                }}
            />
        </div>
    );
};

export default ImageAppear
