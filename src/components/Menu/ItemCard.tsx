"use client"
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import ModalWindow from '../ModalWindow/ModalWindow'
import { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import ScrollButton from "./ScrollButton"

const inter = Inter({
  subsets: ["latin"],
  weight: "400"
})

const interBold = Inter({
  subsets: ["latin"],
  weight: "600"
})

type ItemCard = {
    name: string,
    data: [string, number, string?, string?],
    img: string,
    type?: "pizza" | "burger"
}

const typeLabels: Record<string, string> = {
  pizza: "32cm",
  burger: "500 g",
  extras: "150 g",
  drinks: "0,33 l",
  sos: "50 ml"
}


export default function ItemCard({ name, data, type }: ItemCard) {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [description, price, img, tag] = data ?? [];
  const [isLoaded, setIsLoaded] = useState(false);

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  const newPrice = price

  const renderTag = () => {
    if(tag === "vege") {
      return (
          <>
            <Image
              src="/images/icon-vege.svg" 
              alt="Logo"
              width={30}
              height={30}
          />
          </>
        )}
        if(tag === "ostra") {
          return (
            <>
              <Image
              src="/images/icon-chilli.svg" 
              alt="Logo"
              width={30}
              height={30}
          />
            </>
          )
        }
        return null
    }

    return (
      <>
        <div className={`transition-transform duration-300 ease-in-out hover:scale-105 relative w-[240px] h-[330px] rounded-[40px] 
          bg-gradient-to-br from-white/10 via-white/10 to-transparent text-white backdrop-blur-lg shadow-xl p-4 flex flex-col`}>
          {tag && (
            <div className="absolute top-2 left-2 text-xl p-1">
              { renderTag() }
            </div>
          )}

          <div className="flex justify-center items-center h-[160px] relative">
            {!isLoaded && (
              <div className="absolute z-10 flex items-center justify-center w-[180px] h-[180px]">
              <ClipLoader color="#ffffff" size={40} />
            </div>
            )}
            <Image
                src={img}
                alt="Logo"
                width={180}
                height={180}
                className={`mb-12 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsLoaded(true)}
                loading="lazy"
            />
          </div>

          <div className="h-[40px] mt-2 flex items-center justify-center">
            <h3 className={`${interBold.className} font-semibold text-[22px] text-center`}>{name}</h3>
          </div>
          
          <div className="flex-grow overflow-y-auto text-center mb-2">
            <p className={`${inter.className} text-[14px] leading-4`}>{description}</p>
          </div>
          
          <div className="flex justify-between items-center w-full px-2">
            { typeLabels[type] && (
              <span className='text-sm'>{typeLabels[type]}</span>
            )}
            <div className='flex justify-center items-center text-[14px]'>
            <span className="font-semibold">{newPrice} zł</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <button onClick={openModal} className="w-10 h-6 bg-[#7A0950] rounded-md flex items-center justify-center text-white cursor-pointer">
                +
              </button>
            </div>
          </div>
        </div>
        <ScrollButton />
        {showModal && (
          <ModalWindow name={name} description={description} img={img} tag={tag} type={type} price={price} onClose={closeModal}/>
        )}
      </>
    );
}