import type { PickedProductType } from "../models/pickedProduct";

export const setLastShoppingCart = (
  name: string,
  shoppingCart: PickedProductType[]
) => {
  localStorage.setItem(name, JSON.stringify(shoppingCart));
};
