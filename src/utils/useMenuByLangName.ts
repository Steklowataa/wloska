"use client"
import {menuPL, textPL, modalWindowPL, formValuesPL, validationMessagePL, HomeTextPL} from "./translation/pl"
import {menuEN, textEN, modalWindowEN, formValuesEN, validationMessageEN, HomeTextEN} from "./translation/en"
import {menuUK, textUK, modalWindowUK, formValuesUK, validationMessageUK, HomeTextUK} from "./translation/uk"

import { useLanguage } from "@/app/context/LanguageContext"

export const useMenuByLangName = () => {
    const { language } = useLanguage()

    switch (language) {
        case "PL":
          return { menu: menuPL, text: textPL, modalWindow: modalWindowPL, formVal: formValuesPL, validation: validationMessagePL, homeText: HomeTextPL};
        case "EN":
          return { menu: menuEN, text: textEN , modalWindow: modalWindowEN, formVal: formValuesEN, validation: validationMessageEN, homeText: HomeTextEN};
        case "UK":
          return { menu: menuUK, text: textUK, modalWindow: modalWindowUK, formVal: formValuesUK, validation: validationMessageUK, homeText: HomeTextUK};
        default:
          return { menu: menuPL, text: textPL, modalWindow: modalWindowPL, formVal: formValuesPL, validation: validationMessagePL, homeText: HomeTextPL};
      }
}