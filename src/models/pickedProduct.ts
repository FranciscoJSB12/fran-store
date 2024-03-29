import type { ProductType } from "./product";

export interface PickedProductType extends ProductType {
  quantity?: number;
}
