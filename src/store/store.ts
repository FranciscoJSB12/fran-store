import { configureStore } from "@reduxjs/toolkit";
import {
  productSlice,
  categorySlice,
  productDetailSlice,
  shoppingCartSlice,
  orderSlice,
  authSlice,
} from "./slices";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    category: categorySlice.reducer,
    productDetail: productDetailSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
    orders: orderSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
