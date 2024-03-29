import type { PickedProductType } from "../models/pickedProduct";

export const totalPrice = (products: PickedProductType[]): number => {
  let total = 0;

  for (let product of products) {
    total += parseInt(product.price, 10) * (product.quantity || 1);
  }

  return total;
};
