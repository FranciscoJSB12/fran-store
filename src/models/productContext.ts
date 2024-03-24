import type { Dispatch, SetStateAction } from "react";
import type { ProductType } from "./product";
import type { OrderType } from "./order";

export interface ProductContextType {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  renderProducts: () => ProductType[];
  isProductDetailOpen: boolean;
  setIsProductDetailOpen: Dispatch<SetStateAction<boolean>>;
  isCheckoutSideMenuOpen: boolean;
  setIsCheckoutSideMenuOpen: Dispatch<SetStateAction<boolean>>;
  product: ProductType;
  setProduct: Dispatch<SetStateAction<ProductType>>;
  shoppingCart: ProductType[];
  setShoppingCart: Dispatch<SetStateAction<ProductType[]>>;
  order: OrderType[];
  setOrder: Dispatch<SetStateAction<OrderType[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
}