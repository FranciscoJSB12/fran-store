import { useContext } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { ShoppingCartContext } from "../../Context";
import { categories } from "../../utils/navbarCategories";
import Layout from "../../ui/components/Layout";
import CardContainer from "../components/CardContainer";
import Card from "../components/Card";
import ProductDetail from "../components/ProductDetail";

const Home = () => {
  const {
    searchValue,
    setSearchValue,
    renderProducts,
    loading,
    error,
    category,
  } = useContext(ShoppingCartContext);

  const items = renderProducts();

  let data: JSX.Element;

  if (items.length > 0) {
    data = (
      <CardContainer>
        {items.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </CardContainer>
    );
  } else {
    data = <p className="mt-4 text-2xl font-light">No prodructs found</p>;
  }

  return (
    <Layout>
      <h1 className="text-gray-800 text-lg font-medium mb-4">
        {category !== categories.all.toLowerCase()
          ? category.replace(/\b[a-z]/, (l) => l.toUpperCase())
          : "Home"}
      </h1>
      <label className="text-gray-700 text-md mb-2" htmlFor="search">
        Search products
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className="w-full max-w-[400px] px-4 py-3 mb-4 shadow-lg rounded-full border border-gray-400 focus:outline-none"
      />
      {loading && (
        <div className="mt-10">
          <CgSpinnerTwo className="h-24 w-24 animate-spin text-blue-600" />
          <p className="mt-4 text-lg text-gray-700 font-light">Loading...</p>
        </div>
      )}
      {error && (
        <p className="mt-4 text-md text-gray-700 font-light text-center">
          Error loading products🤕😕
        </p>
      )}
      {!loading && !error && data}
      <ProductDetail />
    </Layout>
  );
};

export default Home;
