"use client";
import { useState } from "react";
import StepButtons from "./StepButtons";
import ListOfProducts from "./ListOfProducts"
import BackgroundBlobsCart from "./BackgroundBlobsCart";

export default function BasketPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="p-4">
      <StepButtons onStepChange={setCurrentStep} currentStep={currentStep} />
      <ListOfProducts currentStep={currentStep} />
      {currentStep === 2 && <div>Formularz danych kontaktowych</div>}
      {currentStep === 3 && <div>Wybór metody płatności</div>}
      <div className="w-[580px] h-[573px] bg-gradient-r from-[#E01094] to-[#7A0950] z-999 rounded-full"></div>
      <BackgroundBlobsCart />
    </div>
  );
}
