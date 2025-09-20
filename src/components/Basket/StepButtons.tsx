"use client";
import { useMenuByLangName } from "@/utils/useMenuByLangName";
import { usePathname, useRouter } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "600" });

type Props = {
  goToSummary: () => Promise<void>;
};

export default function StepButtons({ goToSummary }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const text = useMenuByLangName()
    const {clientTitle, summaryStep, basketStep} = text.formVal.custInfo[0] 

  const steps = [
    { label: summaryStep, path: "/basket/products" },
    { label: clientTitle, path: "/basket/details" },
    { label: basketStep, path: "/basket/summary" },
  ];

  const handleStepClick = (stepPath: string) => {
    if (stepPath === "/basket/summary") {
      goToSummary(); // walidacja + przejście
    } else {
      router.push(stepPath);
    }
  };

  return (
    <div className="flex items-center justify-center gap-x-6 mt-6">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = pathname === step.path;

        return (
          <button
            key={step.label}
            onClick={() => handleStepClick(step.path)}
            className={`${inter.className} flex items-center gap-2 px-4 py-3 border rounded-3xl transition-all duration-200 ${
              isActive
                ? "bg-white/40 text-white border-white"
                : "bg-[#b9b3b3]/40 text-[#CAC6C6] border-white hover:bg-white/10"
            }`}
          >
            <div
              className={`flex items-center justify-center rounded-full w-[24px] h-[24px] text-sm font-medium ${
                isActive
                  ? "bg-[#C2007B] text-white"
                  : "bg-[#7A0950] text-white"
              }`}
            >
              {stepNumber}
            </div>
            {step.label}
          </button>
        );
      })}
    </div>
  );
}
