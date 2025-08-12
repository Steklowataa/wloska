"use client";
import { useState } from "react";
import StepButtons from "./StepButtons";
import ListOfProducts from "./ListOfProducts"

export default function BasketPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="p-4">
      <StepButtons onStepChange={setCurrentStep} />
      <ListOfProducts currentStep={currentStep} />
      {currentStep === 2 && <div>Formularz danych kontaktowych</div>}
      {currentStep === 3 && <div>Wybór metody płatności</div>}
    </div>
  );
}
