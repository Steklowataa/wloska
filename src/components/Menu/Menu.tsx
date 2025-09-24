"use client"
import MenuButtons from "./MenuButton"
import { useMenuByLangName } from "@/utils/useMenuByLangName"
import MenuSection from "./MenuSection"
import Header from "../Header/Header"
import BackgroundBlobs from "./BackgroundBlobs"

export default function Menu() {
  const { menu } = useMenuByLangName()

  const sosForDisplay = menu.sos.reduce((acc, item) => {
    acc[item.name] = ["", item.price, item.img];
    return acc;
  }, {} as Record<string, [string, number, string]>)

  // funkcja pomocnicza do wyciągania tytułu po id
  type TitleItem = { id: string } & Record<string, string>
  const getTitle = (id: string) => {
    const found = menu.title.find((t: TitleItem) => t.id === id)
    if (!found) return id // fallback
    // zwracamy pierwszy klucz różny od id
    const entry = Object.entries(found).find(([key]) => key !== "id")
    return (entry && entry[1]) || id
  }

  return (
    <>
      <Header />
      <MenuButtons />
      <main className="pt-[70px] md:pt-0 px-8 pb-8 min-h-screen space-y-16 text-9xl">
        <BackgroundBlobs />
        <MenuSection id="Pizza" title={getTitle("Pizza")} items={menu.pizza} type="pizza" />
        <MenuSection id="Burgery" title={getTitle("Burgery")} items={menu.burger} type="burger" />
        <MenuSection id="SmashBurgery" title={getTitle("SmashBurgery")} items={menu.smashburger} type="smashburger" />
        <MenuSection id="Przystawki" title={getTitle("Przystawki")} items={menu.extras} type="extras" />
        <MenuSection id="Napoje" title={getTitle("Napoje")} items={menu.drinks} type="drinks" />
        <MenuSection id="Sosy" title={getTitle("Sosy")} items={sosForDisplay} type="sos" />

      </main>
    </>
  )
}
