"use client"
import StepButtons from "@/components/Basket/StepButtons"
import ListOfProducts from "@/components/Basket/Products/ListOfProducts"
import Header from "@/components/Header/Header"
import { useRouter } from "next/navigation"


export default function Page() {
    const router = useRouter();

    const onStepChange = (step: number) => {
        if (step === 2) {
            router.push("/basket/details");
        }
    };

    return (
        <>
            <Header showCart={false}/>
            <StepButtons onStepChange={onStepChange} currentStep={1} />
            <ListOfProducts />
        </>
       
    )
}
