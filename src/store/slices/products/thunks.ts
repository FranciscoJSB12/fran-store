import { startLoadingProducts, setProducts, setError } from "./productSlice";
import { fetchProducts } from "../../../api/fetchProducts";
import type { AppDispatch } from "../../store";

export const getProducts = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadingProducts());

    const products = await fetchProducts();

    if (!products) return dispatch(setError());

    dispatch(setProducts(products));
  };
};
