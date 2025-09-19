import ItemCard from "./ItemCard"
import { Montserrat } from 'next/font/google'
import ProductType from "@/utils/type"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "800"
})

type MenuSectionProps = {
  id: string,
  title: string
  items: Record<string, [string, number, string?, string?]>
  type: ProductType
}

export default function MenuSection({ id, title, items, type }: MenuSectionProps) {
  return (
    <div className="flex flex-wrap justify-center p-3 sm:pt-0.5">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
        <div
          id={id}
          className={`${montserrat.className} text-[30px] flex justify-center items-center sm:justify-start sm:items-start sm:block col-span-full scroll-mt-[120px]`}
        >
          {title}
        </div>

        {Object.entries(items).map(([name, data]) => (
          <ItemCard
            cartId={name}
            name={name}
            key={name}
            data={data}
            type={type}
          />
        ))}
      </div>
    </div>
  )
}
