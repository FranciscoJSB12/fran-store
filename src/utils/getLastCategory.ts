import { categories } from "./navbarCategories";

const allItems = categories.all.toLowerCase();

export const getLastCategory = (): string => {
  const lastCategory = localStorage.getItem("lastCategory");
  if (!lastCategory) return allItems;
  return lastCategory;
};
