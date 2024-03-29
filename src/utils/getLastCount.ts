import { getLastShoppingCart } from "./getLastShoppingCart";

export const getLastCount = (id: string): number => {
  const shoppingCart = getLastShoppingCart();
  if (shoppingCart.length === 0) return 1;
  return shoppingCart.find((p) => p.id === id)?.quantity || 1;
};
