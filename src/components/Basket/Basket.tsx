"use client";
import { useState } from "react";
import StepButtons from "./StepButtons";
import ListOfProducts from "./Products/ListOfProducts"
import BackgroundBlobsCart from "./BackgroundBlobsCart";
import DataForm from "./DataForm";

export default function BasketPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextPage = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }
  return (
    <div className="p-4">
      <StepButtons onStepChange={setCurrentStep} currentStep={currentStep} />
      <ListOfProducts currentStep={currentStep} onNext={goToNextPage}/>
      <DataForm currentStep={currentStep}/>
      {currentStep === 3 && <div>Wybór metody płatności</div>}
      <div className="w-[580px] h-[573px] bg-gradient-r from-[#E01094] to-[#7A0950] z-999 rounded-full"></div>
      <BackgroundBlobsCart />
    </div>
  );
}
