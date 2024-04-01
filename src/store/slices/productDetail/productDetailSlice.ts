import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "../../../models/product";

export interface ProductDetailState {
  currentProduct: ProductType;
  isOpen: boolean;
}

const initialState: ProductDetailState = {
  currentProduct: {
    id: "",
    category: "",
    description: "",
    name: "",
    image: "",
    price: "",
  },
  isOpen: false,
};

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    setProductDetail: (state, action: PayloadAction<ProductType>) => {
      state.isOpen = true;
      state.currentProduct = { ...action.payload };
    },
    closeProductDetail: (state) => {
      state.isOpen = false;
      state.currentProduct = {} as ProductType;
    },
  },
});

export const { setProductDetail, closeProductDetail } =
  productDetailSlice.actions;
