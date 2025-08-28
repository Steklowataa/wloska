"use client";
import { Inter } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import SendMessageToButton from "./SendMessageFromBtn";

const interBold = Inter({
  subsets: ["latin"],
  weight: "600"
});

export default function NextButton() {
  const router = useRouter();
  const pathname = usePathname();
  
  const { handleCheckout, loading } = SendMessageToButton();

  const handleNext = () => {
    
    if (pathname === "/basket/products") {
      router.push("/basket/details");
    } else if (pathname === "/basket/details") {
      handleCheckout(); // wysyla sie wiadomosc na telegram
    } else if (pathname === "/basket/summary") {
      router.push("/menu");
    }
  };

  const getButtonText = () => {
    if (pathname === "/basket/products") {
      return "Do szczegółów →";
    } else if (pathname === "/basket/details") {
      return loading ? "Wysyłanie zamówienia..." : "Potwierdź zamówienie";
    } else if (pathname === "/basket/summary") {
      return "Powrót do menu";
    }
    return "Dalej →";
  };

  return (
    <button
      className={`${interBold.className} bg-[#7A0950] cursor-pointer button-shadow-style text-white
        px-10 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50`}
      type="button"
      onClick={handleNext}
      disabled={loading}
    >
      {getButtonText()}
    </button>
  );
}