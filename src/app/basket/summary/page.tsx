"use client"
import StepButtons from "@/components/Basket/StepButtons"
import SummaryInfo from "@/components/Basket/Summary/SummaryInfo"
import Header from "@/components/Header/Header"
import { useRouter } from "next/navigation"
import { Suspense } from "react"

export default function Page() {
    const router = useRouter();

    const onStepChange = (step: number) => {
        if (step === 1) {
            router.push("/basket/products");
        } else if (step === 2) {
            router.push("/basket/details");
        }
    };
    return (
        <div>
            <Header showCart={false}/>
            <StepButtons onStepChange={onStepChange} currentStep={3} />
            <Suspense fallback={<div>Ładowanie...</div>}>
                <SummaryInfo />
            </Suspense>
        </div>
    )
}
