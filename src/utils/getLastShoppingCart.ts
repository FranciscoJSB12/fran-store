import { PickedProductType } from "../models/pickedProduct";

export const getLastShoppingCart = (): PickedProductType[] => {
  const lastShoppingCart = localStorage.getItem("lastShoppingCart");
  if (!lastShoppingCart) return [];
  return JSON.parse(lastShoppingCart);
};
