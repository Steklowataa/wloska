"use client"
import SwitchButton from "./SwitchButton"
import PersonalDataForm from "./PersonalDataForm"
import AdressDataForm from "./AdressDataForm"

export default function OrderDetails () {
    return (
        <>
        <div>
            <SwitchButton />
            <PersonalDataForm />
             <AdressDataForm />
        </div>
        </>
    )
}