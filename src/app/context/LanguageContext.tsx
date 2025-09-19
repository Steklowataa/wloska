"use client"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "PL" | "EN" | "UK";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("PL");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language | null;
    if (savedLang) setLanguage(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
