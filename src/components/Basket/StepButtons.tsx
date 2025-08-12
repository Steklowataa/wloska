"use client";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: "600"
})

type Props = {
  onStepChange: (step: number) => void;
  currentStep?: number;
};

export default function StepButtons({ onStepChange, currentStep = 1 }: Props) {
  const steps = ["Koszyk", "Dane kontaktowe", "Płatność"];

  return (
    <div className="flex items-center justify-center gap-x-6">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        
        return (
          <button
            key={label}
            onClick={() => onStepChange(stepNumber)}
            className={`${inter.className} flex items-center gap-2 px-4 py-3 border rounded-3xl transition-all duration-200 ${
              isActive 
                ? "bg-white/40 text-white border-white" 
                : "bg-[#b9b3b3]/40 text-[#CAC6C6] border-white hover:bg-white/10"
            }`}
          >
            <div className={`${inter.className} flex items-center justify-center rounded-full w-[24px] h-[24px] text-sm font-medium ${
              isActive 
                ? "bg-[#C2007B] text-white" 
                : "bg-[#7A0950] text-white"
            }`}>
              {stepNumber} 
            </div>
            {label}
          </button>
        );
      })}
    </div>
  );
}