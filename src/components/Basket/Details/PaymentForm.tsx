"use client"
import PaymentSwitchButton from "./PaymentSwitchButton"
import Image from "next/image"

export default function PaymentForm() {
    return (
        <div className="relative w-[595px] h-[228px] items-center"> {/* przerobic zdjecie na wieksze dpi z rozmiarem 590/228 */}
            <Image 
                src="/images/Rectangle132.svg" 
                alt="background" 
                fill
                className="absolute inset-0 z-0 object-cover rounded-2xl"
            />
            <div className="relative z-10">
                <PaymentSwitchButton />
            </div>
        </div>
    )
}
