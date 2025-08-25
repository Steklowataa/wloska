import { Item } from "./types";

export const isSelected = (item: Item, list: Item[]) =>
  list.some((i) => i.name === item.name);

export const toggleItem = (
  item: Item,
  list: Item[],
  setList: (items: Item[]) => void
) => {
  setList(
    isSelected(item, list)
      ? list.filter((i) => i.name !== item.name)
      : [...list, item]
  );
};

export const calculateSaucesPrice = (
  sauces: Item[],
  includesFree: boolean
) => {
  if (!includesFree) {
    return sauces.reduce((sum, s) => sum + s.price, 0);
  }
  return sauces.slice(1).reduce((sum, s) => sum + s.price, 0);
};
