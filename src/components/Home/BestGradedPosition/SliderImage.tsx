"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export type Direction = "left" | "right";

const variants = {
    enter: (direction: Direction) => ({
        x: direction === "right" ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: Direction) => ({
        zIndex: 0,
        x: direction === "right" ? -1000 : 1000,
        opacity: 0,
    }),
};

interface SliderImageProps {
    current: number;
    direction: Direction;
    imageSrc: string;
    altText: string;
}

export default function SliderImage({ current, direction, imageSrc, altText }: SliderImageProps) {
    return (
        <div className="relative w-[400px] h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 100, damping: 20 },
                        opacity: { duration: 0.5 },
                    }}
                    className="absolute w-full h-full"
                >
                    <Image
                        src={imageSrc}
                        alt={altText}
                        width={400}
                        height={400}
                        className="rounded-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
