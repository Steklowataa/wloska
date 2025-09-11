"use client";
import { Inter } from "next/font/google";
import { AiOutlineDelete } from "react-icons/ai";

const inter = Inter({
  subsets: ["latin"],
  weight: "600",
});

type DeleteItemProps = {
  onDelete: () => void;
};

const DeleteItem = ({ onDelete }: DeleteItemProps) => {
  return (
    <button
      onClick={onDelete} // 👈 tutaj uruchamiasz funkcję przekazaną z ListOfProducts
      className={`${inter.className} flex items-center justify-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-full text-white shadow-md transition`}
    >
      <AiOutlineDelete size={18} />
      Usuń
    </button>
  );
};

export default DeleteItem;
