import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { OrderType } from "../../../models/order";

interface OrderState {
  currentOrder: OrderType;
}

const initialState: OrderState = {
  currentOrder: {} as OrderType,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<OrderType>) => {
      state.currentOrder = { ...action.payload };
    },
  },
});

export const { setOrder } = orderSlice.actions;
