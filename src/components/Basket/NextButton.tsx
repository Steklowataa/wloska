"use client";
import { Inter } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";

const interBold = Inter({
    subsets: ["latin"],
    weight: "600"
});

export default function NextButton() {
    const router = useRouter();
    const pathname = usePathname();

    const handleNext = () => {
        if (pathname === '/basket/products') {
            router.push('/basket/details');
        } else if (pathname === '/basket/details') {
            router.push('/basket/summary');
        } else if (pathname === 'basket/summary'){
            router.push("/menu")
        }
    };

    const getButtonText = () => {
        if (pathname === '/basket/products') {
            return 'Do szczegółów →';
        } else if (pathname === '/basket/details') {
            return 'Do podsumowania →';
        } else if (pathname === 'basket/summary') {
            return 'Zamów ponownie'
        }
        return 'Dalej →';
    };

    return (
        <button
            className={`${interBold.className} bg-[#7A0950] cursor-pointer button-shadow-style text-white
             px-10 py-3 rounded-full hover:opacity-90 transition-opacity`}
            type="button"
            onClick={handleNext}>
                {getButtonText()}
        </button>
    );
}