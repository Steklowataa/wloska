type ProductType = "pizza" | "burger" | "smashburger" | "extras" | "drinks" | "sos" 

export type Sauce = {
  name: string;
};

export type Extra = {
  name: string;
};

export type CartItem = {
  id: string;
  name: string;
  image: string;
  quantity: number;
  description: string;
  type?: string;
  basePrice: number;
  sauces?: Sauce[];
  extras?: Extra[];
  totalPrice: number;
};

export default ProductType;