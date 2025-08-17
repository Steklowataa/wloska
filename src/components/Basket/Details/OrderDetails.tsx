"use client"
import SwitchButton from "./SwitchButton"
import PersonalDataForm from "./PersonalDataForm"
import AdressDataForm from "./AdressDataForm"
import ExtraDataForm from "./ExtraDataForm"

export default function OrderDetails () {
    return (
        <>
        <div>
            <SwitchButton />
            <PersonalDataForm />
            <AdressDataForm />
            <ExtraDataForm />
        </div>
        </>
    )
}