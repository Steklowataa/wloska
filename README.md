This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


## 🍽️ Funkcjonalności

- **Home page**
  - animacja (4 różne tła z tytułem, opisem i zdjęciem)
  - przycisk przenoszący do menu
- **Strona z menu i side menu**
  - wybór produktu
  - możliwość nawigacji po sekcjach poprzez nagłówek
  - animacja nagłówka (zmniejsza się przy scrollu w dół)
- **Formularz zamówienia**
  - wybór dostawa/odbiór
  - dla dostawy: dane osobowe, adres, forma płatności
  - przycisk potwierdzenia
- **Podsumowanie i potwierdzenie zamówienia**
- **Integracja z Telegram botem**
  - zamówienie wysyłane w czasie rzeczywistym do kucharza


## 📦 Dependencies

- [Next.js](https://nextjs.org/) – React framework do SSR/SSG i budowy aplikacji fullstack
- [React](https://react.dev/) – biblioteka do tworzenia interfejsów użytkownika
- [React DOM](https://react.dev/reference/react-dom) – integracja Reacta z DOM
- [React Hook Form](https://react-hook-form.com/) – zarządzanie formularzami i walidacją
- [@hookform/resolvers](https://react-hook-form.com/docs/useform/#resolver) – integracja formularzy z bibliotekami do walidacji (np. Zod)
- [Zod](https://zod.dev/) – walidacja schematów danych
- [Validator.js](https://github.com/validatorjs/validator.js) – dodatkowe funkcje walidacji stringów (np. email, URL)
- [Framer Motion](https://www.framer.com/motion/) – animacje dla Reacta
- [Lucide React](https://lucide.dev/) – zestaw ikon dla Reacta
- [React Icons](https://react-icons.github.io/react-icons/) – zestaw ikon z wielu bibliotek
- [React Spinners](https://www.davidhu.io/react-spinners/) – animowane spinnery ładowania
- [Scroll Into View](https://www.npmjs.com/package/scroll-into-view) – płynne przewijanie do elementu
- [Tailwind CSS](https://tailwindcss.com/) – narzędzie do stylowania w oparciu o utility classes
- [@tailwindcss/postcss](https://tailwindcss.com/docs/installation) – integracja Tailwinda z PostCSS
- [Tailwind Merge](https://tailwind-merge.vercel.app/) – inteligentne łączenie klas Tailwind
- [Clsx](https://github.com/lukeed/clsx) – warunkowe łączenie klas CSS
- [@radix-ui/react-label](https://www.radix-ui.com/primitives/docs/components/label) – komponent Label z Radix UI
- [@radix-ui/react-slot](https://www.radix-ui.com/primitives/docs/utilities/slot) – util do komponowania komponentów w Radix UI
- [@next/font](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) – optymalizacja fontów w Next.js

