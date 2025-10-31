"use client"
import { Inter, Playfair_Display } from "next/font/google"
import Link from "next/link"
import { useMenuByLangName } from "@/utils/useMenuByLangName"


const inter = Inter({
    subsets: ["latin"],
    weight: "600"
})

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: "800"
})

const ButtonToMenu = ({ className }: { className?: string }) => {
    const { text: translation } = useMenuByLangName();
    const { text: headerText, buttonText } = translation.stableTextHeader[0];
    return (
        <div className={`${inter.className} flex flex-col md:flex-row gap-6 md:gap-10 items-center ml-0 md:ml-[100px] mt-8 md:mt-0 ${className || ''}`}>
            <div className="text-white text-[16px] relative">
                <p className="text-center">{ headerText }</p>
                <div className="absolute top-full left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0">
                    <svg width="100" height="20" viewBox="0 0 100 20" fill="none">
                        <path 
                            d="M5 10 L85 10 M80 5 L85 10 L80 15" 
                            stroke="#E01094" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div>
                <Link href={"/menu"}>
                    <button className={`${playfair.className} bg-[#E01094] w-[120px] h-[40px] md:w-[140px] md:h-[50px] rounded-[20px] text-white shadow-inner transition-transform duration-300 hover:scale-110 cursor-pointer`}>
                        { buttonText }
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ButtonToMenu
