import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "../../../models/product";
import type { PickedProductType } from "../../../models/pickedProduct";

export interface ShoppingCartState {
  products: PickedProductType[];
  isOpen: boolean;
}

const initialState: ShoppingCartState = {
  products: [],
  isOpen: false,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    setProductInShoppingCart: (state, action: PayloadAction<ProductType>) => {
      state.products = [...state.products, { ...action.payload, quantity: 1 }];
      state.isOpen = true;
    },
    closeShoppingCart: (state) => {
      state.isOpen = false;
    },
    deleteProductInShoppingCart: (state, action: PayloadAction<string>) => {
      const newState = state.products.filter((p) => p.id !== action.payload);
      state.products = [...newState];
    },
    updateProductCountInShoppingCart: (
      state,
      action: PayloadAction<{ id: string; count: number }>
    ) => {
      const newState = state.products.map((p) => {
        if (p.id !== action.payload.id) return p;
        return { ...p, quantity: action.payload.count };
      });
      state.products = [...newState];
    },
    openShoppingCart: (state) => {
      state.isOpen = true;
    },
    resetShoppingCart: (state, action: PayloadAction<PickedProductType[]>) => {
      state.isOpen = true;
      state.products = [...action.payload];
    },
  },
});

export const {
  setProductInShoppingCart,
  closeShoppingCart,
  deleteProductInShoppingCart,
  updateProductCountInShoppingCart,
  openShoppingCart,
  resetShoppingCart,
} = shoppingCartSlice.actions;
