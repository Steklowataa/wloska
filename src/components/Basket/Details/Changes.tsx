"use client"
import { Inter } from "next/font/google"


const inter = Inter({
    subsets: ["latin"],
    weight: "600"
})

const Changes = () => {
    return (
        <>
        <div className={`${inter.className} pl-6 mt-6 `}>
            <p className="mb-2">Wydaj resztę od: </p>
                <select name="change" id="change" className="border border-white w-[252px] h-[48px] rounded-[10px] pl-2 pr-2">
                    <option value="50">50 zł</option>
                    <option value="100">100 zł</option>
                    <option value="200">200 zł</option>
                    <option value="other">Inna kwota</option>
                    <option value="none">Nie potrzebuję resztę</option>
                </select>
        </div>
        </>
    )
}

export default Changes