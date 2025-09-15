"use client"
import StepButtons from "@/components/Basket/StepButtons"
import SummaryInfo from "@/components/Basket/Summary/SummaryInfo"
import Header from "@/components/Header/Header"

export default function Page() {
    return (
        <div>
            <Header showCart={false}/>
            <StepButtons />
            <SummaryInfo />
        </div>
    )
}