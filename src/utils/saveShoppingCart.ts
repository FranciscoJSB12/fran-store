import type { PickedProductType } from "../models/pickedProduct";

export const saveShoppingCart = (
  name: string,
  shoppingCart: PickedProductType[]
) => {
  localStorage.setItem(name, JSON.stringify(shoppingCart));
};
