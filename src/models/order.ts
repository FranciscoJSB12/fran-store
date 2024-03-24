import type { PickedProductType } from "./pickedProduct";

export interface OrderType {
  date: string;
  products: PickedProductType[];
  totalProducts: number;
  totalPrice: number;
}
