import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "../../../models/product";

export interface ProductState {
  allProducts: ProductType[];
  isLoading: boolean;
  error: boolean;
}

const initialState: ProductState = {
  allProducts: [],
  isLoading: false,
  error: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    startLoadingProducts: (state) => {
      state.isLoading = true;
    },
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.error = false;
      state.isLoading = false;
      state.allProducts = [...action.payload];
    },
    setError: (state) => {
      state.error = true;
      state.isLoading = false;
    },
  },
});

export const { startLoadingProducts, setProducts, setError } =
  productSlice.actions;
