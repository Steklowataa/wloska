"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "600",
});

export default function StepButtons() {
  const pathname = usePathname();

  const steps = [
    { label: "Koszyk", path: "/basket/products" },
    { label: "Dane osobowe", path: "/basket/details" },
    { label: "Podsumowanie", path: "/basket/summery" },
  ];

  return (
    <div className="flex items-center justify-center gap-x-6">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = pathname === step.path;

        return (
          <Link
            key={step.label}
            href={step.path}
            className={`${inter.className} flex items-center gap-2 px-4 py-3 border rounded-3xl transition-all duration-200 ${
              isActive
                ? "bg-white/40 text-white border-white"
                : "bg-[#b9b3b3]/40 text-[#CAC6C6] border-white hover:bg-white/10"
            }`}
          >
            <div
              className={`${inter.className} flex items-center justify-center rounded-full w-[24px] h-[24px] text-sm font-medium ${
                isActive
                  ? "bg-[#C2007B] text-white"
                  : "bg-[#7A0950] text-white"
              }`}
            >
              {stepNumber}
            </div>
            {step.label}
          </Link>
        );
      })}
    </div>
  );
}
