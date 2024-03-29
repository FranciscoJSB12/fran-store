import { categories } from "./navbarCategories";

export const getLastCategory = (): string => {
  const lastCategory = localStorage.getItem("lastCategory");
  if (!lastCategory) return categories.all.toLowerCase();
  return lastCategory;
};
