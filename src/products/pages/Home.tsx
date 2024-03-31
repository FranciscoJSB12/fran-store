import { useEffect, useState, ChangeEvent } from "react";
import { useAppSelector, useAppDispatch, getProducts } from "../../store";
import { Layout } from "../../ui/Layout";
import { Spinner } from "../../ui/Spinner";
import { ErrorComponent } from "../../ui/ErrorComponent";
import { SearchBar } from "../../ui/SearchBar";
import { ProductDetail } from "../components/ProductDetail";
import { categories } from "../../utils/navbarCategories";
import { renderData } from "../utils/renderData";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const products = useAppSelector((state) => state.products);
  const category = useAppSelector((state) => state.category.currentCategory);
  const dispatch = useAppDispatch();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value.toLowerCase());
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Layout>
      <h1 className="text-gray-800 text-lg font-medium mb-4 italic">
        {category === categories.all.toLowerCase()
          ? "Home"
          : category.replace(/\b[a-z]/, (l) => l.toUpperCase())}
      </h1>

      <SearchBar value={searchValue} changeHandler={changeHandler} />

      {products.isLoading && <Spinner />}

      {products.error && <ErrorComponent />}

      {!products.isLoading &&
        !products.error &&
        renderData(products.allProducts, category, searchValue)}
      <ProductDetail />
    </Layout>
  );
};
