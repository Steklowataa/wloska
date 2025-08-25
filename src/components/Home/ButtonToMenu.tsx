"use client"
import { Inter, Playfair_Display } from "next/font/google"
import Link from "next/link"

const inter = Inter({
    subsets: ["latin"],
    weight: "600"
})

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: "800"
})

const ButtonToMenu = () => {
    return (
        <div className={`${inter.className} flex flex-row gap-10 items-center ml-[100px]`}>
            <div className="text-white text-[16px] relative">
                <p>Potrzebujesz więcej opcji?</p>
                <div className="absolute top-full left-10 ">
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
                    <button className={`${playfair.className} bg-[#E01094] w-[140px] h-[50px] rounded-[20px] text-white shadow-inner transition-transform duration-300 hover:scale-110 cursor-pointer`}>
                        Menu
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ButtonToMenu