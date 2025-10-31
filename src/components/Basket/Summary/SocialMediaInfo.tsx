"use client"
import { Inter } from "next/font/google"
import Image from "next/image";
import { useMenuByLangName } from "@/utils/useMenuByLangName";

const inter2 = Inter({ 
    subsets: ["latin"],
    weight: "600" 
})

export default function SocialMediaInfo() {
  const text = useMenuByLangName()
  const {socialMediaTitle} = text.formVal.custInfo[0]
  return (
    <div className="mt-6 text-center">
      <p className={`${inter2.className} text-gray-300 mb-3`}>
        {socialMediaTitle}
      </p>
      <div className="flex justify-center gap-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
          <a href="https://www.instagram.com/wloska_krk/" target="_blank" rel="noopener norefferer">
            <Image src={"/images/instagram.png"} alt={"instagram-icon"} width={50} height={50}/>
          </a>
        </div>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
          <a href="https://www.facebook.com/p/W%C5%82oska-PizzaBurger-100093044946129/" target="_blank" rel="noopener norefferer">
            <Image src={"/images/facebook.png"} alt={"facebook-icon"} width={50} height={50}/>
          </a>
        </div>
      </div>
    </div>
  );
}
