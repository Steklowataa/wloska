"use client"

const ButtonToMenu = () => {
    return (
        <div className="flex flex-row gap-10 items-center ml-[100px]">
            <div className="text-white text-[16px] relative">
                <p>Potrzebujesz więcej opcji?</p>
                {/* Arrow pointing to the button */}
                <div className="absolute top-full left-0 mt-2">
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
                <button className="bg-[#E01094] w-[190px] h-[65px] rounded-[20px] text-white shadow-inner transition-transform duration-300 hover:scale-110">Menu</button>
            </div>
        </div>
    )
}

export default ButtonToMenu