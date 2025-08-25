export type Item = {
    name: string;
    price: number;
  };
  
  export type ModalWindowProps = {
    name: string;
    description: string;
    type: "pizza" | "burger" | "smashburger" | "extras" | "drinks" | "sos";
    img: string;
    tag?: string;
    price: number;
    onClose: () => void;
  };
  