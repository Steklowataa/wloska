import Image from 'next/image'

type PizzaCardProps = {
    name: string,
    data: [string, number, string]
}

export default function PizzaCard({ name, data }: PizzaCardProps) {
    const [description, price, tag] = data;

    return (
      <div className="relative w-[260px] h-[350px] rounded-3xl
       bg-gray-700/20 text-white p-3 flex flex-col">
        {tag && (
          <div className="absolute top-2 left-2 text-xl">
            {tag === 'vege' && <span>
            <Image
              src="icon-vege.svg" 
              alt="Logo"
              width={30}
              height={30}
          />
                </span>}
            {tag === 'ostra' && <span>
            <Image
              src="icon-chilli.svg" 
              alt="Logo"
              width={30}
              height={30}
          /></span>}
          </div>
        )}

        <div className="flex justify-center items-center h-[160px]">
          <Image
              src="Ellipse.svg" 
              alt="Logo"
              width={160}
              height={160}
              className='mb-12'
          />
        </div>

        <div className="h-[40px] mt-1 flex items-center justify-center">
          <h3 className="font-semibold text-[24px] text-center">{name}</h3>
        </div>
        
        <div className="flex-grow overflow-y-auto text-center mb-2">
          <p className="text-[16px]">{description}</p>
        </div>
        
        <div className="flex justify-between items-center w-full px-2">
          <span className="text-sm">32 cm</span>
          <div className="flex items-center gap-1 text-sm">
            <span className="font-semibold">{price} zł</span>
            <button className="w-6 h-6 bg-purple-800 rounded-md flex items-center justify-center text-white">
              +
            </button>
          </div>
        </div>
      </div>
    );
}