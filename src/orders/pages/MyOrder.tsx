import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../ui/components/Layout";
import OrderCard from "../components/OrderCard";

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  const lastIndex = currentPath.lastIndexOf("/") + 1;
  const id: string = currentPath.substring(lastIndex);
  let orderNumber: number = 0;

  if (id === "last") {
    orderNumber = order.length - 1;
  }

  return (
    <Layout>
      <header className="flex flex-row items-center gap-8 mb-8">
        <Link to="/my-orders" className="cursor-pointer">
          <ChevronLeftIcon className="h-6 w-6 text-black" />
        </Link>
        <h1 className="text-lg font-medium">My Order</h1>
      </header>
      <section className="w-80">
        {order[orderNumber].products.map((product) => (
          <OrderCard product={product} key={product.id} />
        ))}
      </section>
    </Layout>
  );
};

export default MyOrder;
