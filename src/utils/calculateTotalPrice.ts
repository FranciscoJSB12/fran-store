import type { ProductType } from "../models/product";

export const totalPrice = (products: ProductType[]): number => {
  let total = 0;

  for (let product of products) {
    total += parseInt(product.price, 10);
  }

  return total;
};
