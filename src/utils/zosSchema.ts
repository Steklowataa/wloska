import { z } from "zod"
import validator from "validator";

export const personSchema = z.object({
    name: z.string().min(3, "Imie musi zawierać przynajmniej 3 litery"),
    phone: z.string().refine((val) => validator.isMobilePhone(val, "pl-PL"), {
        message: "Niepoprawny numer telefonu",
      }),
    email: z.string().email("Niepoprawny adres email"),
})