"use client"
import { Inter } from "next/font/google"
import { MapPin, Phone, Mail } from "lucide-react"
import { Playfair_Display } from "next/font/google"
import Image from "next/image"
import { motion } from "framer-motion"


const inter = Inter({ subsets: ["latin"], weight: "600" })
const playfair = Playfair_Display({ subsets: ["latin"], weight: "800"})

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
};

const mapVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
};

export default function ContactUs() {
  return (
    <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="bg-black text-white px-40 py-20 relative overflow-hidden"
    >
      <Image src="/images/ContactUsOrnament.png" alt="" width={500} height={500} className="absolute w-full h-full top-0 left-0 z-0"/>
      <div className="grid md:grid-cols-2 gap-5 items-center z-10 relative">
        {/* Lewa kolumna */}
        <motion.div variants={itemVariants}>
          <h2 className={`${playfair.className} text-[80px] md:text-4xl mb-10`}>
            Znajdujemy się <br /> pod adresem Włoska 2b!
          </h2>

          <ul className="space-y-8">
            <li className="flex items-start gap-4">
              <MapPin className="text-pink-500 w-6 h-6 mt-1" />
              <div>
                <strong className={`${inter.className} block text-[18px] mb-2`}>Godziny otwarcia</strong>
                <p className={`${inter.className} text-sm text-gray-300`}>
                  Od poniedziałku do piątku 10:00-22:00 <br />
                  Soboty i niedziele 12:00-22:00
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <Phone className="text-pink-500 w-6 h-6 mt-1" />
              <div>
                <strong className={`${inter.className} block text-[18px] mb-2`}>Numer telefonu</strong>
                <p className={`${inter.className} text-sm text-gray-300`}>+48 696 454 454</p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <Mail className="text-pink-500 w-6 h-6 mt-1" />
              <div>
                <strong className={`${inter.className} block text-[18px] mb-2`}>Email</strong>
                <p className={`${inter.className} text-sm text-gray-300`}>test@gmail.com</p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Prawa kolumna - mapa */}
        <motion.div variants={mapVariants} className="mt-20">
          <iframe
                className="w-full h-[350px] rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.279761514632!2d19.942801476820686!3d50.05372821301596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b131be8b1cd%3A0x9b04e70f1a317037!2sW%C5%82oska%202b%2C%2030-638%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1727690960000!5m2!1spl!2spl"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
        </motion.div>
      </div>
    </motion.section>
  )
}
