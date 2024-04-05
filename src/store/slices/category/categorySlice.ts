import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { categories } from "../../../utils/navbarCategories";

export interface CategoryState {
  currentCategory: string;
}

const initialState: CategoryState = {
  currentCategory: categories.all.toLowerCase(),
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
