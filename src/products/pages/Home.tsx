import { useContext } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../ui/components/Layout";
import CardContainer from "../components/CardContainer";
import Card from "../components/Card";
import ProductDetail from "../components/ProductDetail";

const Home = () => {
  const { searchValue, setSearchValue, renderProducts, loading, error } =
    useContext(ShoppingCartContext);

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
      <h1 className="text-xl font-medium mb-4">Home</h1>
      <input
        type="text"
        placeholder="Search a Product"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className="xs:w-72 sm:w-80 px-3 py-3 rounded-lg mb-4 border border-black focus:outline-none"
      />
      {loading && (
        <div className="mt-10">
          <CgSpinnerTwo className="h-24 w-24 animate-spin text-gray-800" />
          <p className="mt-4 text-2xl font-light text-gray-800">Loading</p>
        </div>
      )}
      {error && (
        <p className="mt-4 text-2xl font-light">
          Error, check your internet connection
        </p>
      )}
      {!loading && !error && data}
      <ProductDetail />
    </Layout>
  );
};

export default Home;
