"use client"
import PaymentSwitchButton from "./PaymentSwitchButton"
import Image from "next/image"

export default function PaymentForm() {
    return (
        <div className="relative w-[590px] h-[233px] items-center"> {/* przerobic zdjecie na wieksze dpi z rozmiarem 590/228 */}
            <Image 
                src="/images/Rectangle134.png" 
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
