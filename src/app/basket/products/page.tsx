"use client"
import StepButtons from "@/components/Basket/StepButtons"
import ListOfProducts from "@/components/Basket/Products/ListOfProducts"
import Header from "@/components/Header/Header"


export default function Page() {
    return (
        <>
            <Header showCart={false}/>
            <StepButtons />
            <ListOfProducts />
        </>
       
    )
}