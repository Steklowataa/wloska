"use client";
import { Inter } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import SendMessageToButton from "./SendMessageFromBtn";
import { UseFormReturn } from "react-hook-form";
import { OrderValues } from "@/utils/zodSchema";
import { useMenuByLangName } from "@/utils/useMenuByLangName";

const interBold = Inter({ subsets: ["latin"], weight: "600" });

type Props = {
  form?: UseFormReturn<OrderValues>;
};

export default function NextButton({ form }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { handleCheckout, loading } = SendMessageToButton();
  const formValue = useMenuByLangName()
  const {detailsBtn, confirmBtn, nextBtn, goBackBtn } = formValue.formVal.buttonText[0]

  const handleNext = async () => {
    if(form) {
      const isValid = await form.trigger()
      if (!isValid) {
        console.log("Validation fail")
        return
      }
    }

    if (pathname === "/basket/products") {
      router.push("/basket/details");
    } else if (pathname === "/basket/details") {
      handleCheckout(form?.getValues());
    } else if (pathname === "/basket/summary") {
      router.push("/menu");
    }
  };

  const getButtonText = () => {
    if (pathname === "/basket/products") return detailsBtn
    if (pathname === "/basket/details") return loading ? "Wysyłanie zamówienia..." : confirmBtn
    if (pathname === "/basket/summary") return goBackBtn
    return nextBtn
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
