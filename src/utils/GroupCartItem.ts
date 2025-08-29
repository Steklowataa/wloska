type CartItem = {
  name: string;
  image?: string;
  quantity?: number;
  description?: string;
  type?: string;
  basePrice?: number;
  sauces?: Array<string | { name?: string }>;
  extras?: Array<string | { name?: string }>;
  totalPrice?: number;
};
  
type GroupedCartItem = CartItem & {
  additionals: string[];
  quantity: number;
  totalPrice: number;
};
  
function normalizeAdditionName(x: string | { name?: string } | undefined): string {
  if (!x) return "Dodatek";
    return typeof x === "string" ? x : x.name ?? "Dodatek";
}
  
function groupCartItems(items: CartItem[] = []): GroupedCartItem[] {
  if (!Array.isArray(items)) return [];

  const grouped: Record<string, GroupedCartItem> = {};
  for (const item of items) {
    const qty = item.quantity ?? 1;
    const basePrice = item.basePrice ?? 0;
    const itemTotal = item.totalPrice ?? basePrice * qty;
  
    const sauces = (item.sauces || []).map(s => normalizeAdditionName(s));
    const extras = (item.extras || []).map(e => normalizeAdditionName(e));
    const additionals = [...sauces, ...extras];
  
    const key = `${item.name}::additionals[${[...additionals].sort().join("|")}]::price[${basePrice}]`;
  
    if (!grouped[key]) {
      grouped[key] = {
      ...item,
      additionals,
      quantity: qty,
      totalPrice: itemTotal,
      };
    } else {
        grouped[key].quantity += qty;
        grouped[key].totalPrice += itemTotal;
    }
  }
    return Object.values(grouped);
}
  
export default groupCartItems;
  