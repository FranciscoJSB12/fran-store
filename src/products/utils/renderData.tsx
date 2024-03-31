import { ProductGrid } from "../components/ProductGrid";
import { ProductCard } from "../components/ProductCard";
import { categories } from "../../utils/navbarCategories";
import type { ProductType } from "../../models/product";

export const renderData = (
  products: ProductType[],
  category: string,
  searchValue: string
): JSX.Element => {
  let filteredProducts = products;

  if (filteredProducts.length === 0) return <p>No products found</p>;

  if (category !== categories.all.toLowerCase())
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase() === category
    );

  if (searchValue.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(searchValue)
    );
  }

  return (
    <ProductGrid>
      {filteredProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </ProductGrid>
  );
};
