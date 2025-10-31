"use client"

type LogoProps = {
    isScrolled: boolean,
    isHovered: boolean
}

const Logo = ({isScrolled, isHovered} : LogoProps) => {
    return (
        <div  className={`transition-opacity duration-300
        ${isScrolled && !isHovered ? "opacity-0 w-0" : "opacity-100 w-1/3"}`}>
            {/* <Image src="/images/logo.svg" alt="Logo" width={80} height={40} /> */}
        </div>
    )
}

export default Logo
