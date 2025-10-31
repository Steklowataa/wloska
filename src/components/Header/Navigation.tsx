"use client"
import Link from "next/link"
import { useMenuByLangName } from "@/utils/useMenuByLangName"

type NavigationProps = {
    isScrolled: boolean,
    isHovered: boolean
}

const Navigation = ({isScrolled, isHovered} : NavigationProps) => {
    const { text: translation } = useMenuByLangName();

    const { home, menu, contacts } = translation?.homePageHeader?.[0] || { 
        home: "Główna", 
        menu: "Menu", 
        contacts: "Kontakty" 
    };

    return (
        <div className={`flex justify-center md:gap-x-20 gap-x-4 transition-opacity duration-300 items-center 
            ${isScrolled && !isHovered ? "opacity-100 w-auto justify-start" : "opacity-100 flex-1 justify-center"}`}>
          <Link href="/home">
            <p className="cursor-pointer">{home}</p>
          </Link>
          {(!isScrolled || isHovered) && (
            <>
              <Link href="/menu"><p className="cursor-pointer">{menu}</p></Link>
              <p className="cursor-pointer">{contacts}</p>
            </>
          )}
        </div>
    )
}

export default Navigation
