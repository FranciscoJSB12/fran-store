import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getLastCategory } from "../../../utils/getLastCategory";

export interface CategoryState {
  currentCategory: string;
}

const initialState: CategoryState = {
  currentCategory: getLastCategory(),
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
