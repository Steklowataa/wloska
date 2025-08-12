"use client";
import { useState } from "react";

type Props = {
  onStepChange: (step: number) => void;
};

export default function StepButtons({ onStepChange }: Props) {
  const steps = ["Koszyk", "Dane kontaktowe", "Płatność"];

  return (
    <div className="flex items-center justify-center gap-x-6">
      {steps.map((label, index) => (
        <button
          key={label}
          onClick={() => onStepChange(index + 1)}
          className="px-4 py-2 rounded text-white"
        >
          {index + 1}. {label}
        </button>
      ))}
    </div>
  );
}
