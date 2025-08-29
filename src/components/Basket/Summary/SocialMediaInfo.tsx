"use client"
import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";
import { Inter } from "next/font/google"
import Image from "next/image";

const inter2 = Inter({ 
    subsets: ["latin"],
    weight: "600" 
})

export default function SocialMediaInfo() {
  return (
    <div className="mt-6 text-center">
      <p className={`${inter2.className} text-gray-300 mb-3`}>
        Zaobserwuj nas i śledź zniżki na bieżąco:
      </p>
      <div className="flex justify-center gap-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
          <a href="https://www.instagram.com/wloska_krk/" target="_blank" rel="noopener norefferer">
            <Image src={"/images/instagram.png"} alt={"instagram-icon"} width={50} height={50}/>
          </a>
        </div>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
          <a href="https://www.instagram.com/wloska_krk/" target="_blank" rel="noopener norefferer">
            <Image src={"/images/facebook.png"} alt={"facebook-icon"} width={50} height={50}/>
          </a>
        </div>
      </div>
    </div>
  );
}
