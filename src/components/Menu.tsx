"use client"
import MenuButtons from "./MenuButton"
import PizzaCard from "./PizzaComponent"
import { pizza } from "@/utils/text"

export default function Menu() {
    return (
        <>
        <h1>Menu</h1>
        <MenuButtons />
        <div className="flex flex-wrap justify-center p-10">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-3">
            {Object.entries(pizza).map(([name, data], index) => (
            <div className="m-2" key={index}>
                <PizzaCard name={name} data={data}/>
            </div>
    ))}
            </div>
</div>
        </>
    )
}