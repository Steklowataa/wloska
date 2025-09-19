"use client"
import {menuPL, textPL} from "./translation/pl"
import {menuEN, textEN} from "./translation/en"
import {menuUK, textUK} from "./translation/uk"

import { useLanguage } from "@/app/context/LanguageContext"

export const useMenuByLangName = () => {
    const { language } = useLanguage()

    switch (language) {
        case "PL":
          return { menu: menuPL, text: textPL };
        case "EN":
          return { menu: menuEN, text: textEN };
        case "UK":
          return { menu: menuUK, text: textUK };
        default:
          return { menu: menuPL, text: textPL };
      }
}