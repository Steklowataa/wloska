"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const inter2 = Inter({ subsets: ["latin"], weight: "600" });

export default function ModalHeader({
  img,
  name,
  description,
}: {
  img: string;
  name: string;
  description: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center mb-6 relative w-[200px] h-[200px] mx-auto">
        {!isLoaded && (
          <div className="absolute z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-60 rounded-full">
            <ClipLoader color="#ffffff" size={40} />
          </div>
        )}
        <Image
          src={img}
          width={200}
          height={200}
          alt={name}
          className="rounded-full"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <h2 className={`${inter2.className} md:text-[24px] text-[20px] mb-2`}>
        {name}
      </h2>
      <p className={`${inter.className} text-gray-300 mb-6 md:text-[14px] text-[12px]`}>
        {description}
      </p>
    </>
  );
}
