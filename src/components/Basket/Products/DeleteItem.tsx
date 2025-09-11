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
      onClick={onDelete}
      className={`${inter.className} flex items-center justify-center gap-2 w-[120px] h-[45px] px-4 py-2 bg-[#E01094] hover:bg-[#C4037E] rounded-full text-white shadow-md transition`}
    >
      <AiOutlineDelete size={23} />
      Usuń
    </button>
  );
};

export default DeleteItem;
