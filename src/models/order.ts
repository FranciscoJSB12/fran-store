import type { ProductType } from "./product";

export interface OrderType {
  date: string;
  products: ProductType[];
  totalProducts: number;
  totalPrice: number;
}
