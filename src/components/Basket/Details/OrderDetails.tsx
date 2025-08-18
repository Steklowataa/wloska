"use client"
import SwitchButton from "./SwitchButton"
import PersonalDataForm from "./PersonalDataForm"
import AdressDataForm from "./AdressDataForm"
import ExtraDataForm from "./ExtraDataForm"
import PaymentForm from "./PaymentForm"

export default function OrderDetails() {
  return (
    <div className="flex flex-col gap-10">
      <SwitchButton />
       
      {/* górny rząd */}
      <div className="flex gap-8 items-start">
        <PersonalDataForm />
        <AdressDataForm />
      </div>
       
      {/* dolny rząd - reduced gap */}
      <div className="flex gap-8 items-start -mt-15">
        <ExtraDataForm />
        <PaymentForm />
      </div>
       
      {/* przycisk dalej */}
      {/* <div className="flex justify-end">
        <NextButton />
      </div> */}
    </div>
  )
}