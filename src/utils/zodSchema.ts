import { z } from "zod"
import validator from "validator";

const STREET_ALLOWED = /^[A-Za-zÀ-ž0-9\s]+$/;
const HAS_LETTER = /[A-Za-zÀ-ž]/;


//formularz imie, telefon, email
export const personSchema = z.object({
    name: z.string()
        .min(3, "Imie musi zawierać przynajmniej 3 litery"),
    phone: z.string()
        .refine((val) => validator.isMobilePhone(val, "pl-PL"), {
            message: "Niepoprawny numer telefonu",
        }),
    email: z.string()
        .email("Niepoprawny adres email"),
})

//formularz do adresu
export const adresSchema = z.object({
    streetName: z
      .string()
      .min(2, "Za krótka nazwa ulicy 🥺")
      .regex(STREET_ALLOWED, "Nazwa ulicy może zawierać tylko litery, cyfry i spacje 🥺")
      .refine((v) => HAS_LETTER.test(v), {
        message: "Nazwa ulicy musi zawierać przynajmniej jedną literę 🥺🥺🥺",
      }),
  
    streetNumber: z
      .string()
      .trim()
      .min(1, "Numer ulicy nie moze być 0 🥺")
      .regex(/^\d+$/, "Numer nie może składać się z literek — tylko cyfry 🥺🥺🥺")
      .transform((v) => Number(v))
      .refine((n) => Number.isInteger(n), "Numer ulicy musi być liczbą całkowitą")
      .refine((n) => n > 0, "Podaj numer ulicy większy od 0")
      .refine((n) => n <= 999, "Za długi numer 🥺"),
  
    flatNumber: z
      .string()
      .trim()
      .min(1, "Podaj numer mieszkania")
      .regex(/^\d+$/, "Numer mieszkania nie może składać się z literek — tylko cyfry")
      .transform((v) => Number(v))
      .refine((n) => Number.isInteger(n), "Numer mieszkania musi być liczbą całkowitą")
      .refine((n) => n > 0, "Podaj numer mieszkania większy od 0")
      .refine((n) => n <= 999, "Za duża liczba jak na numer mieszkania 🥺"),
  
    floorNumber: z
      .string()
      .trim()
      .optional()
      .refine((v) => v === undefined || v === "" || /^\d+$/.test(v), {
        message: "Numer piętra musi zawierać tylko cyfry",
      })
      .transform((v) => (v === undefined || v === "" ? undefined : Number(v)))
      .refine((n) => n === undefined || Number.isInteger(n), "Numer piętra musi być liczbą całkowitą"),
  
    staircase: z
      .string()
      .optional()
  });

//formularz do promo koda i komentarza
export const extraDataSchema = z.object({
    promoCode: z
      .string()
      .trim()
      .regex(/^[A-Za-z0-9]*$/, "Kod promocyjny może zawierać tylko litery i cyfry")
      .max(6, "Kod promocyjny jest za długi")
      .optional()
      .or(z.literal("")),
  
    message: z
      .string()
      .max(200, "Komentarz jest za długi (max 200 znaków)")
      .optional()
      .or(z.literal("")), // empty string pozwala
});
  
export type ExtraDataValues = z.infer<typeof extraDataSchema>;

//formularz do wyboru typu platnosci
export const paymentSchema = z.object({
  payment: z.enum(["Gotówka", "Karta"], {
    required_error: "Musisz wybrać metodę płatności 🥺",
  }),

  change: z
    .union([
      z.literal("50"),
      z.literal("100"),
      z.literal("200"),
      z.literal("other"),
      z.literal("none"),
    ])
    .optional(),
});

export type PaymentValues = z.infer<typeof paymentSchema>;