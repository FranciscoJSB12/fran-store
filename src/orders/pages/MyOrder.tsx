import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch, resetShoppingCart } from "../../store";
import { Layout } from "../../ui/Layout";
import { ProductCard } from "../components/ProductCard";
import { categories } from "../../utils/navbarCategories";

export const MyOrder = () => {
  const { currentOrder } = useAppSelector((state) => state.orders);
  const products = currentOrder.products;
  const category = useAppSelector((state) => state.category.currentCategory);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const newRoute = `/${
    category === categories.all.toLowerCase() ? "home" : category
  }`;

  const editHandler = (): void => {
    dispatch(resetShoppingCart(currentOrder.products));
    navigate(newRoute);
  };

  return (
    <Layout>
      <main className="w-full max-w-2xl flex flex-col items-center">
        <h1 className="text-gray-800 text-lg font-medium mb-4 italic">
          My Order
        </h1>
        <section className="flex flex-col w-4/5 p-4 h-96 mb-5 border border-gray-300 rounded-lg shadow-xl">
          <div className="overflow-y-scroll flex-1">
            {products.length > 0 ? (
              products.map((p) => <ProductCard key={p.id} product={p} />)
            ) : (
              <p className="text-center">
                Add some products to the shopping cart!
              </p>
            )}
          </div>
          <div className="pt-5">
            <h2 className="text-start text-gray-700 italic">
              Total products:&nbsp;<strong>{currentOrder.totalProducts}</strong>
            </h2>
            <h2 className="text-start text-gray-700 italic">
              Total price:&nbsp;<strong>{currentOrder.totalPrice}$</strong>
            </h2>
          </div>
        </section>
        <section>
          <button
            className="bg-blue-700 text-white w-28 py-2 mr-5 rounded-lg"
            onClick={editHandler}
          >
            Edit
          </button>
          <button className="bg-green-500 text-white w-28 py-2 rounded-lg">
            Buy
          </button>
        </section>
      </main>
    </Layout>
  );
};
