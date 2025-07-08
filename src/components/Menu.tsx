"use client"
import MenuButtons from "./MenuButton"
import { menu } from "@/utils/text"
import MenuSection from "./MenuSection"
import Header from "./Header"
import BackgroundBlobs from "./BackgroundBlobs"


export default function Menu() {
    const sosForDisplay = menu.sos.reduce((acc, item) => {
        acc[item.name] = ["", item.price, item.img];
        return acc;
      }, {} as Record<string, [string, number, string]>)
      
    return (
        <>
        {/* <Header /> */}
        <MenuButtons />
        <main className="p-8 min-h-screen space-y-16 text-9xl">
            <BackgroundBlobs />
            <MenuSection title="Pizza" items={menu.pizza} type="pizza" />
            <MenuSection title="Burgery" items={menu.burger} type="burger" />
            <MenuSection title="Smashburgery" items={menu.smashburger} type="smashburger" />
            <MenuSection title="Przystawki" items={menu.extras} type="extras" />
            <MenuSection title="Napoje" items={menu.drinks} type="drinks" />
            <MenuSection title="Sosy" items={sosForDisplay} type="sos" />
        </main>
        </>
  );
}
