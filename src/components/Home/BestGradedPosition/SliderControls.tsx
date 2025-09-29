"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderControlsProps {
    paginate: (direction: "left" | "right") => void;
}

export default function SliderControls({ paginate }: SliderControlsProps) {
    return (
        <>
            <button
                onClick={() => paginate("left")}
                className="absolute -left-2 cursor-pointer text-white hover:scale-110 transition z-10">
                <ChevronLeft size={40} />
            </button>
            <button
                onClick={() => paginate("right")}
                className="absolute -right-2 cursor-pointer text-white hover:scale-110 transition z-10">
                <ChevronRight size={40} />
            </button>
        </>
    );
}
