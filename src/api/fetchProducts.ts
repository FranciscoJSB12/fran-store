import type { ProductType } from "../models/product";

export const fetchProducts = async (): Promise<ProductType[] | undefined> => {
  try {
    const res = await fetch(
      "https://ecommerce-backend-puce.vercel.app/api/products/"
    );

    if (!res.ok) throw new Error("Error in response");

    const data = await res.json();

    return data;
  } catch (err) {
    console.error((err as Error).message);
  }
};
