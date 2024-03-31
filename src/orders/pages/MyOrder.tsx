import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch, resetShoppingCart } from "../../store";
import { Layout } from "../../ui/Layout";
import { categories } from "../../utils/navbarCategories";

export const MyOrder = () => {
  const { currentOrder } = useAppSelector((state) => state.orders);
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

  if (!currentOrder.products) return <Navigate to={newRoute} />;

  return (
    <Layout>
      <main className="flex flex-col items-center">
        <h1 className="text-gray-800 text-lg font-medium mb-4 italic">
          My Order
        </h1>
        <section>
          <h2>Total products:&nbsp;{currentOrder.totalProducts}</h2>
          <h2>Total price:&nbsp;{currentOrder.totalPrice}$</h2>
          {currentOrder.products.map((p) => (
            <article key={p.id}>{p.name}</article>
          ))}
        </section>
        <section>
          <button
            className="bg-blue-700 text-white w-28 py-2 mr-5 rounded-lg"
            onClick={editHandler}
          >
            Edit
          </button>
          <button className="bg-blue-700 text-white w-28 py-2 rounded-lg">
            Confirm
          </button>
        </section>
      </main>
    </Layout>
  );
};
